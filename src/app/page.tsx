"use client";
import { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

import DashboardHeader from "./dashboard/components/DashboardHeader";

export default function Home() {
 
  return (
    <>
      <DashboardHeader />
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[5vw]">
          <Card>
            <CardHeader>
              <CardTitle>Balence</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-4xl font-bold ">$00.00</h1>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Deposit</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-4xl font-bold ">$30.00</h1>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Withdraw</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-4xl font-bold ">$29.99</h1>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
