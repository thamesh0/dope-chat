import "./css/style.scss";
import { useState } from "react";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Homepage } from "./pages/Homepage";
import { CheckAuth } from "./utlis/CheckAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<CheckAuth />} />
					<Route exact path='/log-in' element={<Login />} />
					<Route exact path='/sign-up' element={<Signup />} />
					<Route exact path='/home' element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
