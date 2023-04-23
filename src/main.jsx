import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { AuthContextProvider } from "./utlis/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</AuthContextProvider>
);
