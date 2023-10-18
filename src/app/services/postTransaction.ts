import { PostTransactionType } from "@/types";

const postTransaction = async ({
  token,
  amount,
  type,
  resource,
  description
}: PostTransactionType) => {
  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/transactions/",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        token: `${token}`,
      },
      body: JSON.stringify({
        type,
        amount,
        resource,
        description
      }),
    }
  );
  const data = await response.json();
  if (data.success) {
    return data.account;
  } else {
    return data;
  }
};

export default postTransaction;
