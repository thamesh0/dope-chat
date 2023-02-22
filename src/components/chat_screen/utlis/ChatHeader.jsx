import React from "react";
import cam from "/src/assets/cam.png";
import add from "/src/assets/add.png";
import more from "/src/assets/more.png";
export const ChatHeader = () => {
	return (
		<div className='chat-info'>
			<span className='user-name'>Timmy</span>
			<div className='chat-icons'>
				<img src={cam} alt='' />
				<img src={add} alt='' />
				<img src={more} alt='' />
			</div>
		</div>
	);
};
