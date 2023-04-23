import React, { useContext, useEffect, useState } from "react";
import { Signup } from "../pages/Signup";
import { Homepage } from "../pages/Homepage";
import { createContext } from "react";
import { getCurrentUser } from "../services/firebase_auth";

const AuthContext = createContext();

export const CheckAuth = () => {
	const currentUser = false;
	const [isSignedIn, setIsSignedIn] = useState(false);
	useEffect(() => {
		if (currentUser != null) setIsSignedIn(true);
	}, []);

	return isSignedIn ? <Homepage /> : <Signup />;
};
