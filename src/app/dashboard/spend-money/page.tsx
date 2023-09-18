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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";

const SpendMoneyPage = () => {
    const token = window.localStorage.getItem("token") as string | "";
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
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
              <Input id="amount" type="number" placeholder="Enter amount" {...register("amount")} />
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
