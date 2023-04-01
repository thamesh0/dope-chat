import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../services/firebase_storage";
import { signUp } from "../services/firebase_auth";
import addAvatar from "../assets/addAvatar.png";

export const Signup = () => {
	// Navigate to links
	const navigate = useNavigate();

	// Error Msgs
	const [ServerErr, setServerErr] = useState("");
	const [ClientEmailErr, setClientEmailErr] = useState("");
	const [ClientPassErr, setClientPassErr] = useState("");
	const [ClientNameErr, setClientNameErr] = useState("");

	const [avatar, setAvatar] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const username = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const displayImg = e.target[3].files[0];
		var downloadURL = "";

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
			const resAuth = await signUp(email, password);

			// On Successful
			if (typeof resAuth == "object") {
				console.log(resAuth);

				// [ ]: Implement Pause & Cancel Functionality
				const status = await uploadImage(resAuth.uid, displayImg, downloadURL);
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

				<form className="form" onSubmit={handleSubmit}>
					{/* Textfields */}
					<input
						type="text"
						className="form_field"
						placeholder="display name"
					/>
					<span className="form_error form_client_error">{ClientNameErr}</span>

					<input className="form_field" type="email" placeholder="email" />
					<span className="form_error form_client_error">{ClientEmailErr}</span>

					<input
						className="form_field"
						type="password"
						placeholder="password"
					/>
					<span className="form_error form_client_error">{ClientPassErr}</span>

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
					<span className="form_error">{ServerErr}</span>
				</form>

				{/* Switch to Login */}
				<p className="auth_switch">
					Don't have an Account?{" "}
					<Link className="switch_link" to="/log-in">
						Log-in
					</Link>
				</p>
			</div>
		</div>
	);
};
