'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";
import React from "react";

const DashboardSidebar = () => {
  return (
    <aside className="w-[200px] hidden md:block min-h-screen">
      <NavigationMenu>
        <NavigationMenuList data-orientation="vertical"  >
          <NavigationMenuItem className="w-full text-left">
            <NavigationMenuLink
              href="/"
              className={`block ${navigationMenuTriggerStyle()}  `}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full text-left">
            <NavigationMenuLink
              href="/dashboard"
              className={`font-bold w-full ${navigationMenuTriggerStyle()}  `}
            >
              Dashboard
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
};

export default DashboardSidebar;
