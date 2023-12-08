import React from 'react';
import getUserTime from "../../utils/dateConverter.js";
import Wishes from "../Wishes/Wishes.jsx";
import './Order.css'
import OrderComposition from "../OrderComposition/OrderComposition.jsx";

const Order = ({ClientName, Address, DeliveryNumber, ClientPhone, ClientComment, Status, Nearest, WishingDate, OrderId}) => {
	
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
				<div className={'delivery_status'}><button onClick={()=>(OrderComposition(OrderId))}>КНОПКА</button>Заказ #{DeliveryNumber} {status(Status)}</div>
				<ul className={'orders_list'}>
					<li className={'order_item'}>{Address}</li>
					{ClientName && <li>Клиент: {ClientName}</li>}
					<li className={'order_item'}>Тел. +{ClientPhone}</li>
					<li className={'order_item'}>Желаемое
						время: {getUserTime(new Date(WishingDate))} {Nearest && 'Ближайшее'}</li>
					{ClientComment && <li>
						<Wishes
								ClientComment={ClientComment}
						/>
					</li>}
					<li>{OrderId}</li>
				</ul>
			</>
	)
}


export default Order;
