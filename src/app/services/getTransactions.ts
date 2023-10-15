const getTransactions = async (token: string) => {
  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/transactions",
    {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        token: `${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};


export default getTransactions

