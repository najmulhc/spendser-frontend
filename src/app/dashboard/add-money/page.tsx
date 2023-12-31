"use client";

import Link from "next/link";
import PageMain from "../components/PageMain";
import Select from "react-select";
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
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { StoreType } from "@/app/redux/store";
import { useEffect, useState } from "react";
import SelectResource from "../components/SelectResource";
import { useToast } from "@/app/components/ui/use-toast";

const AddMoneyPage = () => {
  const { theme, setTheme } = useTheme();
  const [resource, setResource] = useState<string>("");
  const token = window.localStorage.getItem("token") as string | "";
  const { deposit } = useSelector((state: StoreType) => state.resource);
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: any) => {
    const { amount, description } = data;
    const account = await postTransaction({
      token,
      amount,
      type: "deposit",
      resource: resource,
      description,
    });
    toast({
      title: "Transaction added",
      description: "we have the description",
    });

    if (account.message) {
      toast({
        title: "Transaction Error!",
        description: account.message,
      });
    } else {
      dispatch(setAccount(account));
    }
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="resource">Select type</Label>
              <SelectResource type={deposit} setResource={setResource} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Write in detail."
                {...register("description")}
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
