"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";
import { useDispatch } from "react-redux";
import getUser from "../services/getUser";
import { setUser } from "../redux/features/userSlice";

const AuthProtector = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: StoreType) => state);
  const router = useRouter();
  const dispatch = useDispatch();
  if (user.username) {
    return <>{children}</>;
  }

  const token = window.localStorage.getItem("token") as string;
  if (!token && !user.username) {
    router.push("/login");
  } else {
    getUser(token).then((data) => {
      if (data.success) {
        dispatch(
          setUser({
            username: data.user.username,
            email: data.user.email,
          })
        );
        return <>{children}</>;
      } else {
        router.push("/login");
      }
    });
  }
};

export default AuthProtector;
