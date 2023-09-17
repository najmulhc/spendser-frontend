"use client";
import React, { useEffect, useState } from "react";
import getUser from "../services/getUser";
import PageMain from "./components/PageMain";

const Page = () => {
  const [email, setEmail] = useState<String | null>("");

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("token") as string)
        : "false";
    getUser(token).then((data) => {
      if (data.success) {
        setEmail(data.user.username);
      }
    });
  }, []);
  return (
    <PageMain>
      <div className="bg-blue-600 w-[100px] h-[500px] m-4"></div>
      <div className="bg-blue-600 w-[100px] h-[500px] m-4"></div>
    </PageMain>
  );
};

export default Page;
