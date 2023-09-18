"use client";
import ThemeButton from "@/app/components/themebutton";
import { Button } from "@/app/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import useUser from "@/app/hooks/useUser";
import { setUser } from "@/app/redux/features/userSlice";
import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export const dynamic = "force-dynamic";

const DashboardHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") as string | "";
  const { user } = useUser(token);

  // event handler for log out
  const handleLogOut = (e: any) => {
    e.preventDefault();
    if (user) {
      localStorage.removeItem("token");
      dispatch(
        setUser({
          username: "",
          email: "",
        })
      );
      router.push("/login");
    } else {
      router.push("/login");
    }
  };
  return (
    <header className="sticky top-0 left-0 min-w-screen z-10 h-[70px] bg-white dark:bg-[#09090b] flex justify-between px-[100px] py-4 ">
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
          {user.username && (
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/dashboard"
                className={navigationMenuTriggerStyle()}
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
              onClick={(event: any) => handleLogOut(event) as void}
            >
              {user.username && user.username}
              {!user.username && <Button>Log In</Button>}
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
