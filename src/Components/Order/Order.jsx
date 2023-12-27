import React, {useEffect, useState} from 'react';
import getUserTime from "../../utils/dateConverter.js";
import Wishes from "../Wishes/Wishes.jsx";
import './Order.css'
import OrderComposition from "../OrderComposition/OrderComposition.jsx";
import {getOrder} from "../../api/ApiRequst.js";

const Order = (props) => {
	const { ClientName, Address, DeliveryNumber, ClientPhone, ClientComment, Status, Nearest, WishingDate, OrderId, CheckoutUserName, Latitude, Longitude} = props
	// const { order, isLoading } = useFetchOrder(OrderId)
	const [showOrder, setShowOrder] = useState(false);
	const [isLoading, setLoading] = useState(true);
	
	const [order, setOrder] = useState(null);
	
	const loadingOrder = (id) => {
		if (showOrder) {
			getOrder(id).then(async newOrder => {
				setOrder(newOrder)
				setLoading(false)
			})
		}
		
	}
	useEffect(() => {
		loadingOrder(OrderId)
	}, [isLoading, showOrder])
	
	const status = (Status) => {
		let result = ''
		switch (Status) {
			case 5:
				result = <span className="badge text-bg-primary"><div className={'confirmed'}>подтвержден</div></span>
				break;
			case 6:
				result = <span className="badge text-bg-light"> <div className={'delivery'}> на доставке </div></span>
				break;
			case 7:
				result = <span className="badge text-bg-success"><div className={'received'}>получен</div></span>
				break;
			case 12:
				result = <span className="badge text-bg-warning"><div className={'new'}>новый</div></span>
				break;
		}
		return result
	}
	
	return (<>
		<div className="card mb-3 shadow-lg bg-body-tertiary rounded">
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<h3 className={'delivery_status'}>Заказ #{DeliveryNumber} {status(Status)}</h3>
				</li>
				<li className="list-group-item"><i className="bi bi-pin-map"></i> {Address}</li>
				{CheckoutUserName && <li className="list-group-item checkout_user_name">
					<i className="bi bi-person-check"></i><p className='text_client_name'>{CheckoutUserName}</p>
				</li>}
				{ClientName ? <li className="list-group-item client">
					<p className='text_client_name'><i className="bi bi-person "></i> {ClientName}
					</p>
					<p className= 'text_client_name'>
						<i className="bi bi-telephone"></i><a href={`tel:+${ClientPhone}`}>+{ClientPhone}</a>
					</p>
				</li> : <li className="list-group-item"><i className="bi bi-telephone"></i>+{ClientPhone}</li>}
				<li className="list-group-item"><i className="bi bi-hourglass-split"></i> {getUserTime(new Date(WishingDate))} {Nearest && 'Ближайшее'}</li>
				{ClientComment && <li className="list-group-item">
					<Wishes
							ClientComment={ClientComment}
					/>
				</li>}
			</ul>
			<button type="button" className="btn btn-dark" onClick={() => setShowOrder(!showOrder)}>Состав</button>
			{showOrder && <OrderComposition
					data = { props }
					order={order}
					isLoading={isLoading}
					Latitude={Latitude}
					Longitude={Longitude}/>
			}
		</div>
	</>)
}


export default Order;
