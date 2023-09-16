"use client";

import { useRouter } from "next/navigation";
import getUser from "../services/getUser";
import React, { useState } from "react";

const AuthProtector = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [state, setState] = useState<any>();
  const token =
    typeof window !== "undefined"
      ? (window.localStorage.getItem("token") as string)
      : "false";
  getUser(token).then((data) => {
    if (data.success) {
      setState(children);
    } else {
      setState("Redirecting...");
      router.push("/login");
    }
  });
  return <>{state}</>;
};

export default AuthProtector;
