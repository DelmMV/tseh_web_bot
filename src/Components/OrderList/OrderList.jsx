import Order from "../Order/Order.jsx";
import './OrderList.css'
import Empty from "../Empty/Empty.jsx";

function OrderList({data}) {
	return (<ul className={'list'}>
		{
			data.length === 0 ?  <Empty/> : (data.map((item) => <li key={item.OrderId} className={'item'}>
				<Order
						item = {item}
						ClientPhone={item.ClientPhone}
						WishingDate={item.WishingDate}
						Status={item.Status}
						DeliveryNumber={item.DeliveryNumber}
						OrderId={item.OrderId}
						ClientName={item.ClientName}
						Address={item.Address}
						ClientComment={item.ClientComment}
						Wishes={item.Wishes}
						Nearest={item.Nearest}
						CheckoutUserName={item.CheckoutUserName}
						Latitude={item.Latitude}
						Longitude={item.Longitude}
				/>
			</li>))
		}
	</ul>)
}

export default OrderList;
