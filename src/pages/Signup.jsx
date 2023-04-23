import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../services/firebase_storage";
import { uploadUserData } from "../services/firebase_database";
import { signUp } from "../services/firebase_auth";
import addAvatar from "../assets/addAvatar.png";

export const Signup = () => {
	// Navigate to links
	const navigate = useNavigate();

	// Error Msgs
	const [serverErr, setServerErr] = useState("");
	const [clientEmailErr, setClientEmailErr] = useState("");
	const [clientPassErr, setClientPassErr] = useState("");
	const [clientNameErr, setClientNameErr] = useState("");

	const [avatar, setAvatar] = useState();

	const handleSignup = async (e) => {
		e.preventDefault();
		const username = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const displayImg = e.target[3].files[0];

		if (username == "") {
			setClientNameErr("Username can't be empty");
		}
		if (password == "") {
			setClientPassErr("Choose a password");
		}
		if (email == "") {
			setClientEmailErr("Email can't be empty");
		} else {
			// Create an Account
			const resAuth = await signUp(email, password, username);

			// On Successful
			if (typeof resAuth == "object") {
				// [ ]: Implement Loading During Upload
				// [ ]: Implement Delete Selected Image feature

				// if DisplayImage not Selected use default Image
				if (displayImg != "") {
					const downloadURL = await uploadImage(resAuth.uid, displayImg);
					console.log(`upload res - ${downloadURL}`); // true

					// upload User Data
					await uploadUserData(resAuth, email, username, downloadURL);
					navigate("/");
				}
			} else {
				setServerErr(resAuth);
			}
		}
	};

	function handleSelectAvatar(e) {
		if (e.target.files[0]) setAvatar(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="auth_container">
			<div className="auth_wrapper">
				<span className="auth_logo">Dope Chat</span>
				<span className="auth_title">Sign-up</span>

				<form className="form" onSubmit={handleSignup}>
					{/* Textfields */}
					<input
						type="text"
						className="form_field"
						placeholder="display name"
					/>
					<span className="form_error form_client_error">{clientNameErr}</span>

					<input className="form_field" type="email" placeholder="email" />
					<span className="form_error form_client_error">{clientEmailErr}</span>

					<input
						className="form_field"
						type="password"
						placeholder="password"
					/>
					<span className="form_error form_client_error">{clientPassErr}</span>

					{/* file Input */}
					<input
						onChange={handleSelectAvatar}
						id="file"
						type="file"
						className="form_avatar"
					/>
					{/* label takes an id and it becomes then becomes the label for the specified id */}
					<label className="avatar_label" htmlFor="file">
						<img src={addAvatar} alt="Add avatar" />
						<span>Add an avatar</span>
					</label>

					{/* [ x ]: selected file preview */}
					<img
						src={avatar}
						alt=""
						className={`${avatar ? "" : "form_avatar"} img_preview`}
					/>

					{/* Sign-up Button */}
					<button className="form_button">Sign-up</button>
					<span className="form_error">{serverErr}</span>
				</form>

				{/* Switch to Login */}
				<p className="auth_switch">
					Don't have an Account?{" "}
					<Link className="switch_link" to="/login">
						Log-in
					</Link>
				</p>
			</div>
		</div>
	);
};
