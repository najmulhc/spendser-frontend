import { RegisterInfo } from "@/types";

const registerUser = async (user:RegisterInfo) => {
    const response = await fetch(
      "https://viridian-pelican-belt.cyclic.app/user/sign-up", {
        method: "POST", headers:{
            "Content-Type": "Application/json"
        }, 
        body: JSON.stringify(user)
      }
    );
    const data = await response.json();
    return data
}

export default registerUser