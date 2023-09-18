import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";

interface AccountCardProps {
  title: string;
  amount: number;
}

const AccountCard: React.FC<AccountCardProps> = ({ title, amount }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardContent className="w-full p-0">
          <p className="text-5xl text-left">${amount}</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default AccountCard;
