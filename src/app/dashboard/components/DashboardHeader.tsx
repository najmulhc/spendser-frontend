"use client";
import ThemeButton from "@/app/components/themebutton";
import { Button } from "@/app/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"; 
import { setUser } from "@/app/redux/features/userSlice";
import { StoreType } from "@/app/redux/store";
import getUser from "@/app/services/getUser";
import { User } from "@/types";
import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { MouseEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DashboardHeader = () => {
  const { user } = useSelector((state: StoreType) => state);
  const router = useRouter();
  const token =
    typeof window !== "undefined"
      ? (window.localStorage.getItem("token") as string)
      : "false";
  const dispatch = useDispatch();

  useEffect(() => {
    if(!user.username) {
      getUser(token).then((data) => {
        dispatch(
          setUser({
            username: data.user?.username,
            email: data.user?.username,
          })
        );
      });
    }
  }, [dispatch, token ,  user.username]);

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
              {user?.username && user?.username}
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
