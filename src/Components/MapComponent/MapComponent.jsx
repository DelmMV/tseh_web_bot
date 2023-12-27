import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, ZoomControl} from '@pbe/react-yandex-maps';
import './MapComponent.css'
import iconYa from '../../assets/car-placeholder.png'
import useFetchData from "../../hooks/useFetchData.js";
import CustomMarker from "../../Components/CustomMarker/CustomMarker.jsx";
import filterOrder from "../../utils/filterOrder.js";
const MapComponent = ({value, data}) => {
	const [userCoordinates, setUserCoordinates] = useState(null);
	//const {data} = useFetchData()
	
	useEffect(() => {
		
		const getUserLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					const {latitude, longitude} = position.coords;
					setUserCoordinates([latitude, longitude]);
				}, (error) => {
					console.error('Ошибка получения геолокации:', error);
				});
			} else {
				console.error('Геолокация не поддерживается вашим браузером');
			}
		};
		
		getUserLocation();
	}, []);
	
	
	const colorPinStatus = (status) => {
		let result = ''
		switch (status) {
			case 5:
				result = 'islands#blueIcon'
				break;
			case 6:
				result = 'islands#lightBlueIcon'
				break;
			case 7:
				result = 'islands#greenIcon'
				break;
			case 12:
				result = 'islands#yellowIcon'
				break;
		}
		return result
	}
	let filterData = filterOrder(value, data)
	
	return (<YMaps query={{lang: 'ru_RU', apikey: '4cc31bda-30db-4b87-820a-3565e3458110'}}>
		<Map
				defaultState={{center: [59.938676, 30.314487], zoom: 10}}
				width="100%"
				height="100vh"
				options={{maxZoom: 18}} // Установка максимального зума
		>
			<ZoomControl/>
			{
				filterData.map(item => {
					return (<CustomMarker
							key = {Math.random()}
							geometry={[item.Latitude, item.Longitude]}
							icon={colorPinStatus(item.Status)}
							orderNumber={item.DeliveryNumber}
							time={Math.random()}
							Address = {item.Address}
					/>)
				})
			}
			{/*<CustomMarker geometry={markerGeometry} orderNumber={orderNumber} time={time}/>*/}
			
			{userCoordinates && (<Placemark
					geometry={userCoordinates}
					options={{
						iconLayout: 'default#image',
						iconImageHref: iconYa,
						
					}}
			/>)}
		</Map>
	</YMaps>);
};

export default MapComponent;


