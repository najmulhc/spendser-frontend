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
    >
      <h1
        className={`text-xl ${
          !isSideBar
            ? "text-left w-[250px]"
            : "w-full flex items-center justify-center"
        } font-semibold mb-4 transition-all`}
        onClick={() => {
          setIsSideBar(!isSideBar);
        }}
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
      <Button variant="ghost" className="w-full flex justify-start ">
        <Link
          href="/dashboard"
          className="flex gap-2 justify-start items-start"
        >
          <Home
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          {!isSideBar && "Dashboard Home"}
        </Link>
      </Button>
      <Button variant="ghost" className="w-full flex justify-start ">
        <Link
          href="/dashboard/add-money"
          className="flex gap-2 justify-start items-start"
        >
          <AddMoneyIcon
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          {!isSideBar && "Add Money"}
        </Link>
      </Button>
      <Button variant="ghost" className="w-full flex justify-start ">
        <Link
          href="/dashboard/spend-money"
          className="flex gap-2 justify-start items-start"
        >
          <SpendMoneyIcon
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          {!isSideBar && "Spend Money"}
        </Link>
      </Button>
     
    </aside>
  );
};

export default DashboardSidebar;
