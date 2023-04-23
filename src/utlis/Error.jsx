import { useRouteError } from "react-router-dom";
import React from "react";

export const Error = () => {
	const error = useRouteError();

	return (
		<div className="error">
			<h1>Oops! Error </h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};
