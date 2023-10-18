"use client";
import PageMain from "./components/PageMain";
import AccountCard from "./components/AccountCard";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";
import TransactionTable from "./components/TransactionTable";
import getMonthResources from "../services/getMonthResources";
import { useEffect, useState } from "react";

const Page = () => {
  const { balence, deposit, withdraw } = useSelector(
    (state: StoreType) => state.account
  );
  const token = localStorage.getItem("token") as string;
  const [resources, setResources] = useState([]);
  const [monthlyAccount, setMonthlyAccount] = useState<any>({})

  useEffect(() => {
    getMonthResources(token).then((res) => {
      setResources(
        res.resources
          .filter((item: any) => item.type === "withdraw")
      );
      setMonthlyAccount(res.account)
    });
  }, []);

 

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
      <section className="w-full  md:flex gap-4 justify-between ">
        <div className="max-w-full md:w-[70%] ">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Recent Transactions
          </h2>
          <TransactionTable />
        </div>
        <div className="max-w-full md:w-[25%]">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            This month
          </h2>
          <div className="flex justify-between items-center py-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Total spent
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              ${monthlyAccount.withdraw}
            </h3>
          </div>
          <div className="flex justify-between items-center py-2">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Total earned
            </h3>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              ${monthlyAccount.deposit}
            </h3>
          </div>
          <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors mt-6">
            Top Spendings this month
          </h2>
          {resources[0] &&
            resources
              .sort(function (a:any, b:any) {
                return a.total - b.total
              })
              .reverse().map((item: any) => (
                <div
                  className="flex justify-between items-center py-2"
                  key={item.name}
                >
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    {item.name}
                  </h3>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    ${item.total}
                  </h3>
                </div>
              ))}
        </div>
      </section>
    </PageMain>
  );
};

export default Page;
