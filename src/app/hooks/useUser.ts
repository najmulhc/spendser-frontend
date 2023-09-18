"use client";
import { useEffect, useState } from "react";
import getUser from "../services/getUser";
import { User } from "@/types";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";
import { useDispatch } from "react-redux";
import { setAccount } from "../redux/features/accountSlice";

const useUser = (token:string) => {
  const [stateUser, setStateUser] = useState<User>({ username: "", email: "" });

  const { user } = useSelector((state: StoreType) => state);
  const dipatch = useDispatch()
 

  useEffect(() => {
    if (!user.email) {
      getUser(token).then((data) => {
        dipatch(setAccount(data.user.account))
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
