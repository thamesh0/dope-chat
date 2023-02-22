import React from "react";
import cam from "../../assets/cam.png";
import add from "../../assets/add.png";
import more from "../../assets/more.png";
import { MsgList } from "./utlis/MsgList";
import { MsgInput } from "./utlis/MsgInput";

export const ChatScreen = () => {
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
			<MsgList />
			<MsgInput />
		</div>
	);
};
