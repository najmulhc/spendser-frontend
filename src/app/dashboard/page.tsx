"use client";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";

const Page = () => {
  const [email, setEmail] = useState<String | null>("");
  useEffect(() => {
    fetch("http://localhost:6969")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        setEmail(localStorage.getItem("accessToken"));
      });
  }, []);
  return (
    <main>
      <h1 className="m-[100px] text-4xl">
        {email ? `Email: ${email}` : "No email address found!"}
      </h1>
    </main>
  );
};

export default Page;
