import React from 'react';
import getUserTime from "../../utils/dateConverter.js";
import './Order.css'

const Order = ({ClientName, Address, DeliveryNumber, ClientPhone, ClientComment,Status, Nearest, WishingDate}) => {
	
	const status = (Status) => {
		let result = ''
		switch (Status) {
			case 5:
				result = <div className={'confirmed'}>подтвержден</div>
				break;
			case 6:
				result = <div className={'delivery'}>на доставке</div>
				break;
			case 7:
				result = <div className={'received'}>получен</div>
				break;
			case 12:
				result = <div className={'new'}>новый</div>
				break;
		}
	return result
	}
	
	
	return (
			<>
				<div className={'delivery_status'}>Заказ #{DeliveryNumber} {status(Status)}</div>
				<ul className={'orders_list'}>
					<li className={'order_item'}>{Address}</li>
					{ClientName && <li>Клиент: {ClientName}</li>}
					<li className={'order_item'}>Тел. +{ClientPhone}</li>
					<li className={'order_item'}>Желаемое время: {getUserTime(new Date(WishingDate))} {Nearest && 'Ближайшее'}</li>
					{ClientComment && <li>{ClientComment}</li>}
				</ul>
			</>
	)
}


export default Order;
