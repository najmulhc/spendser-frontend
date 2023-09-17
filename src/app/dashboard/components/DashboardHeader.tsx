"use client";
import ThemeButton from "@/app/components/themebutton";
import { Button } from "@/app/components/ui/button";

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
  const initialUser = {
    username: "",
    email: "",
  };
  const [user, setUser] = useState<User>(initialUser);
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
    <header className="sticky top-0 left-0 min-w-screen z-0 h-[70px] bg-white dark:bg-[#09090b] flex justify-between px-[100px] py-4 ">
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
              {user !== initialUser && user?.username}
              {!user && <Button>Log In</Button>}
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
