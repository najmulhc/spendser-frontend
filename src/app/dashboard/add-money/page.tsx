"use client";

import Link from "next/link";
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
import postTransaction from "@/app/services/postTransaction";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setAccount } from "@/app/redux/features/accountSlice";

const AddMoneyPage = () => {
  const token = window.localStorage.getItem("token") as string | "";
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: any) => {
    const { amount } = data;
    const account = await postTransaction({
      token,
      amount,
      type: "add",
    });
    dispatch(setAccount({ ...account }));
    router.push("/dashboard");
  };

  return (
    <PageMain className="min-w-screen min-h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Add Money</CardTitle>
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
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageMain>
  );
};

export default AddMoneyPage;
