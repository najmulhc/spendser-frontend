import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import React from "react";

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
        <TableRow>
            <TableCell>
                Bought 5 carrots
            </TableCell>
            <TableCell>
                Withdraw
            </TableCell>
            <TableCell>
                Food
            </TableCell> 
            <TableCell>
                $4.20
            </TableCell>
            <TableCell>
                3 mins ago
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                Bought 5 carrots
            </TableCell>
            <TableCell>
                Withdraw
            </TableCell>
            <TableCell>
                Food
            </TableCell> 
            <TableCell>
                $4.20
            </TableCell>
            <TableCell>
                3 mins ago
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                Bought 5 carrots
            </TableCell>
            <TableCell>
                Withdraw
            </TableCell>
            <TableCell>
                Food
            </TableCell> 
            <TableCell>
                $4.20
            </TableCell>
            <TableCell>
                3 mins ago
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>
                Bought 5 carrots
            </TableCell>
            <TableCell>
                Withdraw
            </TableCell>
            <TableCell>
                Food
            </TableCell> 
            <TableCell>
                $4.20
            </TableCell>
            <TableCell>
                3 mins ago
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
