"use client";
import React from "react";

import useUser from "../hooks/useUser";
import { useRouter } from "next/navigation";



const AuthProtector = ({ children }: { children: React.ReactNode }) => {

  const token = window.localStorage.getItem("token") as string | "";
  const { user } = useUser(token);
  const router = useRouter();
 
  if (user.username) {
    return <>{children}</>;
  } else {
 
     return (
      <h1>No user exists</h1>
     )
  }
};

export default AuthProtector;
