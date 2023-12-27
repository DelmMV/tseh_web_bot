import {useState, useEffect, useRef, memo, useCallback, useContext} from "react";
import {getOrderList, getIntensive, getOrder} from "../api/ApiRequst.js";

function useFetchData() {
	const [isLoading, setLoading] = useState(true);
	const [isRefreshing, setRefreshing] = useState(false);
	const [data, setData] = useState([]);
	const [intensive, setIntensive] = useState(null);
	
	useEffect(() => {
		getOrderList().then(async newPosts => {
			setData(newPosts);
			setLoading(false)
		});
	}, []);
	
	useEffect(() => {
		getIntensive().then(async newIntensive => {
			setIntensive(newIntensive)
		})
	}, [])
	
	return { data, intensive, isLoading };
}

export default useFetchData
