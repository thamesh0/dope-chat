import "./css/style.scss";
import { useState } from "react";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Homepage } from "./pages/Homepage";
import { CheckAuth } from "./utlis/CheckAuth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
	const router = createBrowserRouter([
		{ path: "/", element: <CheckAuth /> },
		{
			path: "/sign-up",
			element: <Signup />,
		},
		{
			path: "/log-in",
			element: <Login />,
		},
		{
			path: "/home",
			element: <Homepage />,
		},
		// {
		//   path: "/verification",
		//   element: <Verfication />,
		// },
		// {
		//   path: "/test",
		//   element: <Test />,
		// },
	]);

	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
