import "./css/style.scss";
import { useState } from "react";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Homepage } from "./pages/homepage";
import { CheckAuth } from "./utlis/CheckAuth";
import { RouteProvider, BrowserRouter, Routes, Route } from "react-router-dom";
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
