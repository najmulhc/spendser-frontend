import { LoginInfo } from "./../../types";
const login = async (user: LoginInfo) => {
  const response = await fetch(
    "https://viridian-pelican-belt.cyclic.app/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
  console.log(data);
  if (data.success) {
    localStorage.setItem("token", data.token);
  }
  return data;
};

export default login;
