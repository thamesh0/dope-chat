import React from "react";
import { MsgList } from "./utlis/MsgList";
import { MsgInput } from "./utlis/MsgInput";
import { ChatHeader } from "./utlis/ChatHeader";

export const ChatScreen = () => {
	return (
		<div className='chat'>
			<ChatHeader />
			<MsgList />
			<MsgInput />
		</div>
	);
};
