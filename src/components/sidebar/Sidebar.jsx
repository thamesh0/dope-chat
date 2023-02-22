import React from "react";
import { Navbar } from "../navbar/Navbar";
import { SearchBar } from "./utlis/SearchBar";
import { ChatsList } from "./utlis/ChatsList";
export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<Navbar />
			<SearchBar />
			<ChatsList />
		</div>
	);
};
