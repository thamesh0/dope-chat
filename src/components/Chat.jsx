import React from "react";
import cam from "../assets/cam.png";
import add from "../assets/add.png";
import more from "../assets/more.png";

export const Chat = () => {
	return (
		<div className='chat'>
			<div className='chat-info'>
				<span className='user-name'>Timmy</span>
				<div className='chat-icons'>
					<img src={cam} alt='' />
					<img src={add} alt='' />
					<img src={more} alt='' />
				</div>
			</div>
		</div>
	);
};
