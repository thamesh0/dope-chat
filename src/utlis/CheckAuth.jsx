import React from "react";
import { Signup } from "../pages/Signup";
import { Homepage } from "../pages/Homepage";
export const CheckAuth = () => {
	let isSignedIn = false;
	return isSignedIn ? <Homepage /> : <Signup />;
};
