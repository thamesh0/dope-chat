import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getCurrentUser, auth } from "./firebase_auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			console.log(user);
		});

		return () => {
			unsub();
		};
	}, []);

	return (
		<AuthContextProvider value={{ currentUser }}>
			{children}
		</AuthContextProvider>
	);
};
