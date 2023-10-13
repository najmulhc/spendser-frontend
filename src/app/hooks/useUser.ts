"use client";
import { useEffect, useState } from "react";
import getUser from "../services/getUser";
import { User } from "@/types";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";
import { useDispatch } from "react-redux";
import { setAccount } from "../redux/features/accountSlice";
import { setType } from "../redux/features/resourceSlice";
import { setUser } from "../redux/features/userSlice";

const useUser = (token: string) => {
  const [stateUser, setStateUser] = useState<User>({ username: "", email: "" });

  const { user } = useSelector((state: StoreType) => state);
  const dispatch = useDispatch();
  const deposits: string[] = [];
  const withdraws: string[] = [];

  useEffect(() => {
    if (!user.email) {
      getUser(token).then((data) => {
        dispatch(setAccount(data.user.account));
        setStateUser({
          username: data.user?.username,
          email: data.user?.email,
        });
        for (let element of data.user.resources) {
          if (element.type === "deposit") {
            deposits.push(element.name);
          } else {
            withdraws.push(element.name);
          }
        }

        dispatch(
          setUser({ username: data.user?.username, email: data.user?.email })
        );
        dispatch(
          setType({
            type: "deposit",
            data: deposits,
          })
        );
        dispatch(
          setType({
            type: "withdraw",
            data: withdraws,
          })
        );
      });
    } else {
      setStateUser({
        username: user.username,
        email: user.email,
      });
    }
  }, [user.username, token, user.email, dispatch]);
  return { user: stateUser };
};

export default useUser;
