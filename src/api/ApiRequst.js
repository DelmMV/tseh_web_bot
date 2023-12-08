import ApiManager from "./ApiManager";
import axios from "axios";
//import AsyncStorage from "@react-native-async-storage/async-storage";
const backendToken = '5e6gVCAngQ1C17LDnrOu+hccCgKhvfxvo0BPdqDelzfaCVkyF19cyLDrMH2et0D8'
const backendUrl = 'https://app.tseh85.com/Service/api/delivery/orders?LastUpdateTicks=0'
const backendIntensive = 'https://app.tseh85.com/Service/api/delivery/settings'
const backendOrder = 'https://app.tseh85.com/Service/api/delivery/purchases?OrderID='
export async function getOrderList() {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				token: backendToken,
			},
		};
		const response = await axios.get(backendUrl, config); // Замените на URL вашего API
		return response !== 200 ? response.data : []
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
}

export async function getIntensive() {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				token: backendToken,
			},
		};
		const response = await axios.get(backendIntensive, config); // Замените на URL вашего API
		return response !== 200 ? response.data : []
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
}

export async function getOrder(id) {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				token: backendToken,
			},
		};
		const response = await axios.get(`${backendOrder}${id}`, config); // Замените на URL вашего API
		return response !== 200 ? response.data : []
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
}


