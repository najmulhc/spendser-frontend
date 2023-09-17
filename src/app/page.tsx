"use client";
import { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

import DashboardHeader from "./dashboard/components/DashboardHeader";

export default function Home() {
  return (
    <>
      <DashboardHeader />
      <main>
        <h1>Welcome to spendser</h1>
      </main>
    </>
  );
}
