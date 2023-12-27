import React, {useContext} from 'react';
import MapComponent from "../../Components/MapComponent/MapComponent.jsx";
import Header from "../../Components/Header/Header.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import AppContext from "../../contexts/AppContext.jsx";
const MapPage = () => {
	const {data, intensive, isLoading} = useFetchData()
	const { value } = useContext(AppContext)
	return (
			<>
				<Header
						intensive={intensive}
						data={data}
				/>
				<MapComponent
						value = {value}
						data = {data}
				/>
			</>
	);
};

export default MapPage;
