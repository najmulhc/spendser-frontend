"use client";
import PageMain from "../components/PageMain";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useForm } from "react-hook-form";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { setAccount } from "@/app/redux/features/accountSlice";
import postTransaction from "@/app/services/postTransaction";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { StoreType } from "@/app/redux/store";
import { useEffect, useState } from "react";
import SelectResource from "../components/SelectResource";

const SpendMoneyPage = () => {
  const token = window.localStorage.getItem("token") as string | "";
  const dispatch = useDispatch();
  const router = useRouter();
  const [resource, setResource] = useState<string>("Select a type");
  const { register, handleSubmit, reset } = useForm();
  const { withdraw } = useSelector((state: StoreType) => state.resource);
  const [str, setStr] = useState<string>("");
  const onSubmit = async (data: any) => {
    const { amount } = data;

    console.log(data);
    const account = await postTransaction({
      token,
      amount,
      type: "spend",
      resource: str,
    });
    dispatch(setAccount({ ...account }));
    router.push("/dashboard");
  };

 

  return (
    <PageMain className="min-w-screen min-h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Spend Money</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                {...register("amount")}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="amount">Type</Label>
              <SelectResource setResource={setStr} type={withdraw} />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageMain>
  );
};

export default SpendMoneyPage;
