import axios from "axios";

const backendUrl = 'https://app.tseh85.com/Service/api/delivery/orders?LastUpdateTicks=0'
const backendIntensive = 'https://app.tseh85.com/Service/api/delivery/settings'
const backendOrder = 'https://app.tseh85.com/Service/api/delivery/purchases?OrderID='
const backendPicture = 'https://s3.tseh85.com/tseh-hosted-content/pictures/'
const backendLogin = "https://app.tseh85.com/Service/api/AuthenticateDelivery"



export async function getOrderList() {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem('AccessToken'),
			},
		};
		const response = await axios.get(backendUrl, config);
		return  await response.data
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [error.code]
	}
}

export async function getIntensive() {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem('AccessToken'),
			},
		};
		const response = await axios.get(backendIntensive, config);
		return await response.data
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
}

export async function getOrder(id) {
	console.log('fetch order')
	
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem('AccessToken'),
			},
		};
		const response = await axios.get(`${backendOrder}${id}`, config);
		return response !== 200 ? await response.data : []
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
}

export async function getPicture(id) {
	try {
		const response = await axios.get(`${backendPicture}${id}.png?PictureId=${id}`, {
			responseType: 'blob',
		});
		const imageUrl = URL.createObjectURL(response.data);
		return response !== 200 ? imageUrl : []
	} catch (error) {
		console.error('Ошибка при получении данных:', error);
		return [];
	}
}

export async function UserLogin(data) {
	console.log(data)
	try {
		const result = await axios(backendLogin, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		});
		return result;
	} catch (error) {
		console.log(error);
		return error;
	}
}


