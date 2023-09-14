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
import React, { FC } from "react";
import { FieldValues, Form, useForm } from "react-hook-form";

interface LoginInfo {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: LoginInfo) => {
     login(data)
    reset();
   
  };
  return (
    <main className="flex min-h-screen min-w-screen justify-center items-center">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email")}
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
