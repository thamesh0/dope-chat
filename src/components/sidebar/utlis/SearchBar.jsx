import React from "react";
import { ChatCard } from "./ChatCard";
export const SearchBar = () => (
	<div className='search'>
		<div className='search-form'>
			<input type='text' placeholder='Find a User' />
		</div>
		<ChatCard />
	</div>
);
