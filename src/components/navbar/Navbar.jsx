import React, { useContext } from "react";
import { AuthContext } from "../../utlis/AuthContext";
import { logout } from "../../services/firebase_auth";

export const Navbar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="navbar">
			<div className="user">
				<img src={currentUser.photoURL} alt="" />
				<span>{currentUser.displayName}</span>
			</div>
			<div className="logo">Dope Chat</div>
			<button className="logout" onClick={() => logout()}>
				Logout
			</button>
		</div>
	);
};
