import React from "react";

export const ChatCard = () => {
	return (
		<div className='user-chat'>
			<img src='/vite.svg' alt='' />
			<div className='user-info'>
				<span className='user-name'>Timmy</span>
				<p className='last-msg'>Hello</p>
			</div>
		</div>
	);
};
