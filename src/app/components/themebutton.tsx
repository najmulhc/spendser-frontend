"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

const ThemeButton = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <Button variant="ghost" className="dark:hidden block" onClick={() => setTheme("dark")}>
        <Sun width={24} height={24} className="dark:stroke-white stroke-black" />
      </Button>
      <Button
        variant="ghost"
        className="dark:block hidden"
        onClick={() => setTheme("light")}
      >
        <Moon width={24} height={24} className="dark:stroke-white stroke-black" />
      </Button>
    </>
  );
};

export default ThemeButton;
