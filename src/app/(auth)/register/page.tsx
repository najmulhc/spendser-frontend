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
import registerUser from "@/app/services/register";
import { RegisterInfo } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

export const dynamic = "force-dynamic";

const RegisterPage: FC = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const user: RegisterInfo = {
      email: data.email,
      username: data.username,
      password: data.password,
    };
    const result = await registerUser(user);
    if (result.success) {
      localStorage.setItem("token", result.token);
      router.push("/dashboard");
    } else {
      console.log(result.message);
    }
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
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center mt-2">
              Already have an account?{" "}
              <Link className="underline" href="/login">
                Login
              </Link>
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
};

export default RegisterPage;
