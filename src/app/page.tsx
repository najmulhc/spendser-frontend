
import Header from "./components/header/header";
import DashboardHeader from "./dashboard/components/DashboardHeader"; 

export const dynamic = "force-dynamic";

export default function Home() {
 

  return (
    <>
      <Header />
      <main>
        <h1 className="text-2xl font-semibold"> welcome to my world!</h1>
      </main>
    </>
  );
}
