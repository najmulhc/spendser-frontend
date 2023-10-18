"use client";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import getTransactions from "@/app/services/getTransactions";
import getTimeDifference from "@/lib/getTimeDifference";
import React, { useEffect, useState } from "react";

const TransactionTableRow = ({ transaction }: { transaction: any }) => {
  const { type, description, amount, resource, time } = transaction;
  const usingTime = getTimeDifference(time);
  return (
    <TableRow>
      <TableCell>{description}</TableCell>
      <TableCell>
        <Badge
          variant="secondary"
          className={`bg-opacity-20 ${
            type === "deposit"
              ? "bg-green-500 text-green-600"
              : "bg-red-500 text-red-600"
          }`}
        >
          {type}
        </Badge>
      </TableCell>
      <TableCell>{resource.name}</TableCell>
      <TableCell>${amount}</TableCell>
      <TableCell>
        {usingTime.value} {usingTime.unit} ago
      </TableCell>
    </TableRow>
  );
};

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState<number>(1);

  const token = localStorage.getItem("token") as string;

  useEffect(() => {
    getTransactions(token).then((data) => {
      setTransactions(data.transactions);
    });
  }, []);
  return (
    <>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Resource</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions
            .sort(function (a: any, b: any) {
              return b.time - a.time;
            })
            .slice((page - 1) * 5 + 0, page * 5)
            .map((tr) => (
              <TransactionTableRow key={tr} transaction={tr} />
            ))}
        </TableBody>
      </Table>
      <div className="w-full flex justify-between">
        <Button
          disabled={transactions[(page * 5) - 6] === undefined}
          variant="outline"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous page
        </Button>
        <Button
          variant="outline"
          disabled={transactions[page * 5] === undefined}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Page
        </Button>
      </div>
    </>
  );
};

export default TransactionTable;
