import {useLocation, Navigate} from "react-router-dom";
import React from 'react';
import useFetchData from "../hooks/useFetchData.js";

const RequireAuth = ({children}) => {
	const location = useLocation();
	const token = localStorage.getItem("AccessToken");
	const {data} = useFetchData()

	if(data.toString() === 'ERR_BAD_REQUEST') {
		return <Navigate to='/login' state={{from: location}} replace/>
	} else if(!token) {
		return <Navigate to='/login' state={{from: location}} replace/>
	}
	return children;
};

export default RequireAuth;
