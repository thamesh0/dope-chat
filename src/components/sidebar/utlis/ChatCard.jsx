import React from "react";

export const ChatCard = () => {
	return (
		<div className='chat-card'>
			<img src='/vite.svg' alt='' />
			<div className='card-info'>
				<span className='user-name'>Timmy</span>
				<p className='last-msg'>Hello</p>
			</div>
		</div>
	);
};
