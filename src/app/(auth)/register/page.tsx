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
import React, { FC } from "react";
import { useForm } from "react-hook-form";

const RegisterPage: FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <main className="flex min-h-screen min-w-screen justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="@username"
                  {...register("username")}
                />
              </div>
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
                Register
              </Button>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
};

export default RegisterPage;
