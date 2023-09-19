import Link from "next/link";
import Header from "./components/header/header";
import { Button } from "./components/ui/button";
export const dynamic = "force-dynamic";

export default function Home() {

  return (
    <>
      <Header />
      <main className="min-w-screen min-h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="croll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Manage Your money with the perfect solution
        </h1>
        <Button>
          <Link href="/register">
            Get Started
          </Link>
        </Button>
      </main>
    </>
  );
}
