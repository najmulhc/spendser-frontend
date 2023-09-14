"use client";
import ThemeButton from "@/app/components/themebutton";

import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

import React from "react";

const DashboardHeader = () => {
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
            <ThemeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default DashboardHeader;
