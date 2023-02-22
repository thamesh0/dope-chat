import React from "react";
import { Link } from "react-router-dom";
import addAvatar from "../assets/addAvatar.png";
export const Signup = () => {
	return (
		<div className='auth_container'>
			<div className='auth_wrapper'>
				<span className='auth_logo'>Alpha Chat</span>
				<span className='auth_title'>Sign-up</span>

				<form className='form' action=''>
					{/* Textfields */}
					<input
						type='text'
						className='form_field'
						placeholder='display name'
					/>
					<input className='form_field' type='email' placeholder='email' />
					<input
						className='form_field'
						type='password'
						placeholder='password'
					/>
					{/* file Input */}
					<input id='file' type='file' className='form_avatar' />

					{/* label takes an id and it becomes then becomes the label for the specified id */}
					<label className='avatar_label' htmlFor='file'>
						<img src='/src/assets/addAvatar.png' alt='Add avatar' />
						<span>Add an avatar</span>
					</label>

					{/* Sign-up Button */}
					<button className='form_button'>Sign-up</button>
				</form>

				{/* Switch to Login */}
				<p className='auth_switch'>
					Don't have an Account?{" "}
					<Link className='switch_link' to='/log-in'>
						Log-in
					</Link>
				</p>
			</div>
		</div>
	);
};
