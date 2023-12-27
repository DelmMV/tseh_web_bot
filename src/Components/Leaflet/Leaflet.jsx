import React, {useState} from 'react';
import './Leaflet.css'
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";

const Leaflet = (props) => {
	const position = [props.Latitude, props.Longitude]
	function LocationMarker() {
		const [position, setPosition] = useState(null)
		const map = useMapEvents({
			click() {
				map.locate()
			},
			locationfound(e) {
				setPosition(e.latlng)
				map.flyTo(e.latlng, map.getZoom())
			},
		})
		
		return position === null ? null : (
				<Marker position={position}>
					<Popup>You are here</Popup>
				</Marker>
		)
	}
	
	return (
			<div >
			<MapContainer
					center={position}
					zoom={13}
					scrollWheelZoom={false}
					//zoomControl={false}  // Отключаем кнопки управления масштабом
					attributionControl= {false} // Отключаем атрибуции карты
			>
				<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				
				{/*<LocationMarker />*/}
				
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
			</div>
	);
};

export default Leaflet;
