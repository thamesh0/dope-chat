import React from "react";
import { Signup } from "../pages/signup";
import { Homepage } from "../pages/homepage";
export const CheckAuth = () => {
  let isSignedIn = true;
  return isSignedIn ? <Homepage /> : <Signup />;
};
