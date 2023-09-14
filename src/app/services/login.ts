import { LoginInfo } from "./../../types";
const login = async (user: LoginInfo) => {
  const response = await fetch("http://localhost:6969/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
};

export default login;
