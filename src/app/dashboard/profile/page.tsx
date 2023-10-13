"use client";

import { StoreType } from "@/app/redux/store";
import { useSelector } from "react-redux";
import PageMain from "../components/PageMain";
import { Separator } from "@radix-ui/react-menubar";
import ThemeButton from "@/app/components/themebutton";
import { Button } from "@/app/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { clearUser } from "@/app/redux/features/userSlice";
import ResourcePart from "../components/ResourcePart";

const ProfilePage = () => {
  const { user } = useSelector((state: StoreType) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(user)
  return (
    <PageMain className="flex flex-col gap-8 ">
      <section>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Profile Settings
        </h2>
        <Separator />
        <ThemeButton />
      </section>
      <section>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Account ({user.username})
        </h2>
        <Separator />
        <Button
          className="mt-4"
          onClick={() => {
            dispatch(clearUser(user));
            localStorage.removeItem("token");
            router.push("/");
          }}
        >
          Sign Out
        </Button>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <ResourcePart type="deposit" />
          <ResourcePart type="withdraw" />
        </div>
      </section>
    </PageMain>
  );
};

export default ProfilePage;
