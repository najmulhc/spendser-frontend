const getUser = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/user/",
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

export default getUser;
