import React from "react";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "./SearchBar";
import { ChatsList } from "./ChatsList";
export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<Navbar />
			<SearchBar />
			<ChatsList />
		</div>
	);
};
