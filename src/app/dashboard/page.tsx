"use client";
import PageMain from "./components/PageMain";
import AccountCard from "./components/AccountCard"; 
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";

const Page = () => {
  const { balence, deposit, withdraw } = useSelector(
    (state: StoreType) => state.account
  );
  return (
    <PageMain>
      <section className=" w-full h-full">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My Account
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-4">
          <AccountCard title="Balance" amount={balence} />
          <AccountCard title="Deposit" amount={deposit} />
          <AccountCard title="Withdraw" amount={withdraw} />
        </div>
      </section>
    </PageMain>
  );
};

export default Page;
