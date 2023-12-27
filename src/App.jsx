import React from 'react'
import './index.css'
import MainPage from "./Pages/MainPage/MainPage.jsx";
import {AppProvider} from "./contexts/AppContext.jsx";
import {Routes, Route} from 'react-router-dom';
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import RequireAuth from "./hoc/RequireAuth.jsx";
import MapPage from "./Pages/MapPage/MapPage.jsx";
const App = () => {
	
	return (
			<AppProvider>
				<Routes>
						<Route path='/' element={
							<RequireAuth>
								<MainPage/>
							</RequireAuth>
						} errorElement={<ErrorPage/>} />
						<Route path='/map' element={
							<RequireAuth>
								<MapPage/>
							</RequireAuth>
						} />
						<Route path='/login' element={<LoginPage/>} errorElement={<ErrorPage/>} />
				</Routes>
			</AppProvider>
	);
};

export default App;
