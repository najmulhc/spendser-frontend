"use client";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import login from "@/app/services/login";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";

interface LoginInfo {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const onSubmit = (data: LoginInfo) => {
    login(data).then((response) => {
      if (response.success) {
        router.push("/dashboard");
      } else {
        setError(response.message);
      }
    });
  };
  return (
    <main className="flex min-h-screen min-w-screen justify-center items-center">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
          <CardContent>
            {/* @ts-ignore */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Email or Username"
                  {...register("credential")}
                />
              </div>
              <div className="my-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  {...register("password")}
                />
              </div>
              <p className="text-center text-red-600 my-2">{error}</p>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
};

export default LoginPage;
