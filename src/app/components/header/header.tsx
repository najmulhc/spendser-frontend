"use client";
import React from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import {
  NavigationMenu, 
  NavigationMenuItem, 
} from "../ui/navigation-menu";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Button } from "../ui/button";
import useUser from "@/app/hooks/useUser";
export const dynamic = "force-dynamic";

const Header = () => {
  const token = localStorage.getItem("token") as string | "";
  const { user } = useUser(token);
  return (
    <header className="w-full min-h-[60px]  px-4 md:px-[4rem] flex items-center justify-between">
      <Link href="/">
        <h1 className="flex justify-start items-center gap-2 text-3xl font-semibold">
          <Logo
            width={32}
            height={32}
            className="stroke-black dark:stroke-white"
          />
          <span className="hidden md:block">Spendser</span>
        </h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {user.username ? (
              <Link className="opacity-80 hover:opacity-100" href="/dashboard">Dashboard</Link>
            ) : (
              <Button>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
