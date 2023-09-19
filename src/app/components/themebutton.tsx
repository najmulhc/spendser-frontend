"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");

  useEffect(() => {
    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDark, setTheme]);
  return (
    <>
      <div className="flex items-center space-x-2 my-4">
        <Switch
          checked={isDark}
          onCheckedChange={() => {
            setIsDark(!isDark);
          }} id="dark-mode"
        />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
    </>
  );
};

export default ThemeButton;
