import React, { useState } from "react";
import { findUser } from "../../../services/firebase_database";

export const SearchBar = () => {
	const [search, setSearch] = useState();
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	const handleSearch = () => {};
	const handleKey = (e) => {
		e.code === "Enter" && handleSearch;
	};

	return (
		<div className="search">
			<div className="search-form">
				<input
					type="text"
					placeholder="Find a User"
					onKeyDown={(e) => handleKey(e)}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			{user && (
				<div className="chat-card">
					<img src="/vite.svg" alt="" />
					<div className="card-info">
						<span className="user-name">{user.displayName}</span>
						<p className="last-msg">{user.photoURL}</p>
					</div>
				</div>
			)}
		</div>
	);
};
