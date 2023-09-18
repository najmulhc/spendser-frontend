"use client";

import DashboardHeader from "./dashboard/components/DashboardHeader";
import useUser from "./hooks/useUser";


export const dynamic = "force-dynamic";

export default function Home() {
  const token = localStorage?.getItem("token") as string || "";
  const { user } = useUser(token);

  return (
    <>
      <DashboardHeader />
      <main>
        <h1 className="text-2xl font-semibold"> {user?.username}</h1>
      </main>
    </>
  );
}
