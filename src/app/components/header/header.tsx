"use client";
import React, { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Button } from "../ui/button";
import { User } from "@/types";
import getUser from "@/app/services/getUser";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/features/userSlice";
import { useSelector } from "react-redux";
import { StoreType } from "@/app/redux/store";

export const dynamic = "force-dynamic";
const Header = () => {
  const { user } = useSelector((state: StoreType) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token).then((data) => {
        if (data.success) {
          const { user } = data;
          dispatch(setUser({ username: user.username, email: user.email }));
        }
      });
    }
  }, [dispatch]);

  return (
    <header className="sticky top-0 left-0 min-w-screen max-w-screen z-10  min-h-[60px]  px-4 md:px-[4rem] flex items-center justify-between bg-white dark:bg-[#09090b]">
      <Link href="/">
        <h1 className="flex justify-start items-center gap-2 text-3xl font-semibold">
          <Logo
            width={32}
            height={32}
            className="stroke-black fill-none dark:stroke-white"
          />
          <span className="hidden md:block">Spendser</span>
        </h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex jusify-end items-center gap-4">
          <NavigationMenuItem>
            <Link
              className="opacity-80 hover:opacity-100 hover:font-medium"
              href="/"
            >
              Home
            </Link>
          </NavigationMenuItem>
          {!user.username && (
            <>
              <NavigationMenuItem>
                <Link
                  className="opacity-80 hover:opacity-100 hover:font-medium"
                  href="/contact"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  className="opacity-80 hover:opacity-100 hover:font-medium"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </NavigationMenuItem>
            </>
          )}
          <NavigationMenuItem>
            {user.username ? (
              <Link
                className="opacity-80 hover:opacity-100 hover:font-medium"
                href="/dashboard"
              >
                Dashboard
              </Link>
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
