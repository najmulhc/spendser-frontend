"use client";

import { StoreType } from "@/app/redux/store";
import { useSelector } from "react-redux";
import PageMain from "../components/PageMain";
import { Separator } from "@radix-ui/react-menubar";
import ThemeButton from "@/app/components/themebutton";

const ProfilePage = () => {
  const { user } = useSelector((state: StoreType) => state);
  return (
    <PageMain>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Profile Settings
      </h2>
      <Separator />
       <ThemeButton/>
    </PageMain>
  );
};

export default ProfilePage;
