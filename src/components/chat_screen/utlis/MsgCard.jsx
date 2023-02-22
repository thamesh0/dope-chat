import React from "react";

export const MsgCard = () => {
	return (
		<div className='msg-card owner'>
			<div className='msg-info'>
				<img src='/vite.svg' alt='' />
				<span className='msg-status'>just now</span>
			</div>
			<div className='msg-content'>
				<p>Hello</p>
				<img
					src='https://images.pexels.com/photos/14917159/pexels-photo-14917159.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
					alt=''
				/>
			</div>
		</div>
	);
};
