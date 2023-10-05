"use client";
 

const getUser = async (token: string) => {

 
  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/user/",
    {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        token: `${token ? token: "invalid token"}`,
      },
    }
  );
  const data = await response.json();
  console.log(data)

  return data;
};

export default getUser;
