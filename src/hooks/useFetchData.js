import { useState, useEffect, useRef, memo } from "react";
import {getOrderList, getIntensive, getOrder} from "../api/ApiRequst.js";

function useFetchData(id = []) {
	const [isLoading, setLoading] = useState(true);
	const [isRefreshing, setRefreshing] = useState(false);
	const [data, setData] = useState([]);
	const [intensive, setIntensive] = useState(null);
	//const [order, setOrder] = useState(null);
	
	const ref = useRef(null);
	useEffect(() => {
		getOrderList().then(async newPosts => {
			setData(newPosts);
		});
	}, []);
	
	useEffect(() => {
		getIntensive().then(async newIntensive => {
			setIntensive(newIntensive)
		})
	}, [])
	
	// useEffect(() => {
	// 	getOrder(id).then(async newOrder => {
	// 		setOrder(newOrder)
	// 	})
	// }, [])
	
	return { data, intensive };
}

export default useFetchData
