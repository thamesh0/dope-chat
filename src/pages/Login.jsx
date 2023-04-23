import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/firebase_auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
	// Navigate to links
	const navigate = useNavigate();

	const [serverErr, setServerErr] = useState("");
	const [clientEmailErr, setClientEmailErr] = useState("");
	const [clientPassErr, setClientPassErr] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		if (password == "") {
			setClientPassErr("Enter a password");
		}
		if (email == "") {
			setClientEmailErr("Email can't be empty");
		} else {
			// login into your account
			const resAuth = await login(email, password);

			// On Successful
			if (typeof resAuth == "object") {
				console.log(resAuth);
				navigate("/");
			} else {
				setServerErr(resAuth);
			}
		}
	};
	return (
		<div className="auth_container">
			<div className="auth_wrapper">
				<span className="auth_logo">Dope Chat</span>
				<span className="auth_title">Log-in</span>
				<form className="form" onSubmit={handleLogin}>
					{/* Textfields */}
					<input className="form_field" type="email" placeholder="email" />
					<span className="form_error form_client_error">{clientEmailErr}</span>

					<input
						className="form_field password"
						type="password"
						placeholder="password"
					/>
					<span className="form_error form_client_error">{clientPassErr}</span>

					{/* Log-in Button */}
					<button className="form_button">Log in</button>
					<span className="form_error">{serverErr}</span>
				</form>

				<p className="auth_switch">
					Already have an Account?{" "}
					<Link className="switch_link" to="/signup">
						Signup
					</Link>
				</p>
			</div>
		</div>
	);
};
