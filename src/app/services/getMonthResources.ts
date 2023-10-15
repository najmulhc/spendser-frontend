const getMonthResources = async (token: string) => {
  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/user/this-month",
    {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        token: `${token}`,
      },
    }
  );
  const data = await response.json(); 
  return data;
};

export default getMonthResources;
