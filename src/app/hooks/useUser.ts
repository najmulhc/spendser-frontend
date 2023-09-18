"use client";
import { useEffect, useState } from "react";
import getUser from "../services/getUser";
import { User } from "@/types";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";

const useUser = (token:string) => {
  const [stateUser, setStateUser] = useState<User>({ username: "", email: "" });

  const { user } = useSelector((state: StoreType) => state);
 

  useEffect(() => {
    if (!user.email) {
      getUser(token).then((data) => {
        setStateUser({
          username: data.user?.username,
          email: data.user?.email,
        });
      });
    } else {
      setStateUser({
        username: user.username,
        email: user.email,
      });
    }
  }, [user.username, token, user.email]);
  return { user: stateUser };
};

export default useUser;
