"use client";
import AddMoneyIcon from "@/app/components/icons/AddMoneyIcon";
import Home from "@/app/components/icons/Home";
import SpendMoneyIcon from "@/app/components/icons/SpendMoneyIcon";
import UserIcon from "@/app/components/icons/User";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import Link from "next/link";

import React, { useState } from "react";

const DashboardSidebar = () => {
  const [isSideBar, setIsSideBar] = useState<boolean>(false);
  return (
    <aside
      className={`sticky  top-[70px] tranistion p-2  h-[calc(100vh-70px)] border-right ${!isSideBar &&"md:w-[200px]"} `}
      onClick={() => {
        setIsSideBar(!isSideBar);
      }}
    >
      <Link href="/dashboard">
        <Button variant="ghost" className="w-full flex  justify-start ">
          <Home
            className="stroke-black dark:stroke-white mr-2"
            width={20}
            height={20}
          />
          <span className="hidden md:block">
            {!isSideBar && "Dashboard"}
          </span>
        </Button>
      </Link>

      <Link href="/dashboard/add-money">
        <Button variant="ghost" className="w-full flex justify-start gap-2 ">
          <AddMoneyIcon
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          <span className="hidden md:block"> {!isSideBar && "Add Money"}</span>
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
          <span className="hidden md:block">
            {" "}
            {!isSideBar && "Spend Money"}
          </span>
        </Button>
      </Link>
      <Link href="/dashboard/profile">
        {" "}
        <Button variant="ghost" className="w-full flex justify-start gap-2 ">
          <UserIcon
            className="stroke-black dark:stroke-white"
            width={20}
            height={20}
          />
          <span className="hidden md:block">
            {" "}
            {!isSideBar && "Profile"}
          </span>
        </Button>
      </Link>
    </aside>
  );
};

export default DashboardSidebar;
