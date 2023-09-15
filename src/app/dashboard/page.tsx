"use client";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import getUser from "../services/getUser";

const Page = () => {
  const [email, setEmail] = useState<String | null>("");

  useEffect(() => {
    getUser().then((data) => {
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
