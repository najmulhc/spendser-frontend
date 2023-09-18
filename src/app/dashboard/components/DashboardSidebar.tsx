"use client";
import AddMoneyIcon from "@/app/components/icons/AddMoneyIcon";
import Home from "@/app/components/icons/Home";
import Logo from "@/app/components/icons/Logo";
import Moon from "@/app/components/icons/Moon";
import SpendMoneyIcon from "@/app/components/icons/SpendMoneyIcon";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import Link from "next/link";

import React, { useState } from "react";

const DashboardSidebar = () => {
  const [isSideBar, setIsSideBar] = useState<boolean>(false);
  return (
    <aside
      className={`sticky  top-[70px] tranistion p-2  h-[calc(100vh-70px)] border-right `}
      onClick={() => {
        setIsSideBar(!isSideBar);
      }}
    >
      <h1
        className={`text-xl ${
          !isSideBar
            ? "text-left w-[250px]"
            : "w-full flex items-center justify-center"
        } font-semibold mb-4 transition-all`}
      >
        {isSideBar ? (
          <Logo
            className="stroke-black dark:stroke-white"
            width={24}
            height={24}
          />
        ) : (
          "Dashboard"
        )}
      </h1>

      <Link href="/dashboard">
        <Button
          variant="ghost"
          className="w-full flex justify-start items-start gap-2 "
        >
          <Home
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          {!isSideBar && "Dashboard Home"}
        </Button>
      </Link>

      <Link href="/dashboard/add-money">
        <Button variant="ghost" className="w-full flex justify-start gap-2 ">
          <AddMoneyIcon
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          {!isSideBar && "Add Money"}
        </Button>
      </Link>

      <Link href="/dashboard/spend-money">
        {" "}
        <Button variant="ghost" className="w-full flex justify-start gap-2 ">
          <SpendMoneyIcon
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          {!isSideBar && "Spend Money"}
        </Button>
      </Link>
    </aside>
  );
};

export default DashboardSidebar;
