import React from "react";
import { MsgCard } from "./MsgCard";

export const MsgList = () => {
	const messages = [];

	for (let i = 0; i < 7; i++) messages.push(<MsgCard key={i} id={i} />);

	return <div className='msg-list'>{messages}</div>;
};
