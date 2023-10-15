"use client";
import PageMain from "./components/PageMain";
import AccountCard from "./components/AccountCard";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";
import TransactionTable from "./components/TransactionTable";

const Page = () => {
  const { balence, deposit, withdraw } = useSelector(
    (state: StoreType) => state.account
  );
  return (
    <PageMain>
      <section className=" w-full  mb-24">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My Accounts
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-4">
          <AccountCard title="Balance" amount={balence} />
          <AccountCard title="Deposit" amount={deposit} />
          <AccountCard title="Withdraw" amount={withdraw} />
        </div>
      </section>
      <section className="w-full  flex justify-between ">
        <div className="md:w-[70%]">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Recent Transactions
          </h2>
          <TransactionTable />
        </div>
        <div className="w-[25%]">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            This month
          </h2>
          <div className="flex justify-between items-center py-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Total spent
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              $500
            </h3>
          </div>
          <div className="flex justify-between items-center py-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Total earned
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              $690
            </h3>
          </div>
          <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors mt-6">
            Top Spendings this month
          </h2>
          <div className="flex justify-between items-center py-2">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Food
            </h3>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              $273
            </h3>
          </div>
          <div className="flex justify-between items-center py-2">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              House Rent
            </h3>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              $200
            </h3>
          </div>
        </div>
      </section>
    </PageMain>
  );
};

export default Page;
