"use client";
import React, { useEffect, useState } from "react";
import getUser from "../services/getUser";

const Page = () => {
  const [email, setEmail] = useState<String | null>("");

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token") as string
        : "false";
    getUser(token).then((data) => {
      if (data.success) {
        setEmail(data.user.username);
      }
    });
  }, []);
  return (
    <main>
      <h1 className="m-[100px] text-4xl">
        {email ? `username: ${email}` : "No email address found!"}
      </h1>
    </main>
  );
};

export default Page;
