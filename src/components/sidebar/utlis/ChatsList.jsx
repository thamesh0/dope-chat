import React, { useState } from "react";
import { ChatCard } from "./ChatCard";

export const ChatsList = () => {
	const chatsList = [];
	for (let i = 0; i < 5; i++) {
		chatsList.push(<ChatCard key={i} />);
	}
	return <div className='chats-list'> {chatsList}</div>;
};
