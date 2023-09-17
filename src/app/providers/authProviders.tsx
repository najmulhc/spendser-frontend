"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";

const AuthProtector = ({ children }: { children: React.ReactNode }) => {
   
  return <>{children}</>
};

export default AuthProtector;
