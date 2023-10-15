import { Badge } from "@/app/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import getTimeDifference from "@/lib/getTimeDifference";
import React from "react";

const TransactionTableRow = () => {
  let type = "Withdraw";
  const time = getTimeDifference(1697314575930);
  const amount = 100;
  return (
    <TableRow>
      <TableCell>Bought 5 carrots</TableCell>
      <TableCell>
        <Badge
          variant="secondary"
          className={`bg-opacity-20 ${
            type === "Deposit"
              ? "bg-green-500 text-green-600"
              : "bg-red-500 text-red-600"
          }`}
        >
          {type}
        </Badge>
      </TableCell>
      <TableCell>Food</TableCell>
      <TableCell>${amount}</TableCell>
      <TableCell>
 
        {time.value} {time.unit} ago
      </TableCell>
    </TableRow>
  );
};

const TransactionTable = () => {
  return (
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
        <TransactionTableRow />
        <TransactionTableRow />
        <TransactionTableRow />
        <TransactionTableRow />
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
