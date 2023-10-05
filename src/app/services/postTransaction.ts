import { PostTransactionType } from "@/types";

const postTransaction = async ({
  token,
  amount,
  type, resource
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
        amount,  resource
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  if (data.success) {
    return data.account;
  }
};

export default postTransaction;
