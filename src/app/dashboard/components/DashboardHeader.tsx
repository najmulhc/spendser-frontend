"use client";
import ThemeButton from "@/app/components/themebutton";

import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import getUser from "@/app/services/getUser";
import { User } from "@/types";
import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { MouseEvent, useEffect, useState } from "react";

const DashboardHeader = () => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
  });
  const router = useRouter();
  const token =
    typeof window !== "undefined"
      ? (window.localStorage.getItem("token") as string)
      : "false";
  useEffect(() => {
    getUser(token).then((data) => {
      setUser(data.user);
    });
  }, []);
  const handleLogOut = (e: any) => {
    e.preventDefault();
    if (user) {
      localStorage.removeItem("token");
      router.push("/login");
    } else {
      router.push("/login");
    }
  };
  return (
    <header className="flex justify-between px-[100px] py-4">
      <Link href="/" className="font-bold text-2xl ">
        SpnendSer
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-end">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/dashboard"
              className={navigationMenuTriggerStyle()}
            >
              Dashboard
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
              onClick={(event: any) => handleLogOut(event) as void}
            >
              {`${user ? user.username : "Log In"}`}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default DashboardHeader;
