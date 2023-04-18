import React, { useContext, useEffect, useState } from "react";
import { Signup } from "../pages/Signup";
import { Homepage } from "../pages/Homepage";
import { createContext } from "react";
import { getCurrentUser } from "../services/firebase_auth";

export const AuthContext = createContext();

export const CheckAuth = () => {
	const currentUser = useContext(AuthContext);
	const [isSignedIn, setIsSignedIn] = useState(false);
	useEffect(() => {
		if (currentUser) setIsSignedIn(true);
	}, []);

	return isSignedIn ? <Homepage /> : <Signup />;
};
