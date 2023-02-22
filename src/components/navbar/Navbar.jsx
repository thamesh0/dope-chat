import React from "react";

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>Dope Chat</div>
			<div className='user'>
				<img src='/vite.svg' alt='' />
				<span>Timmy</span>
				<button className='logout'>Logout</button>
			</div>
		</div>
	);
};
