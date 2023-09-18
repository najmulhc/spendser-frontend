"use client";
import PageMain from "./components/PageMain"; 
import AccountCard from "./components/AccountCard"; 
import ThemeButton from "../components/themebutton";

const Page = () => {
  return (
    <PageMain>
      <section className=" w-full h-full">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My Account
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-4">
          <AccountCard title="Balence" amount={0} />
          <AccountCard title="Diposit" amount={0} />
          <AccountCard title="Withdraw" amount={5} />
        </div>
  
      </section>
    
    </PageMain>
  );
};

export default Page;
