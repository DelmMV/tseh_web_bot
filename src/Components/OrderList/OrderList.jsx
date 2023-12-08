import Order from "../Order/Order.jsx";
import  './OrderList.css'

function OrderList(props) {
	return (<ul className={'list'}>
		{props.data !== null ? (props.data.map((item, index) => <li key={index} className={'item'}>
				<Order
						ClientPhone = {item.ClientPhone}
						WishingDate = {item.WishingDate}
						Status = {item.Status}
						DeliveryNumber = {item.DeliveryNumber}
						OrderId = {item.OrderId}
						ClientName = {item.ClientName}
						Address = {item.Address}
						ClientComment = {item.ClientComment}
						Wishes = {item.Wishes}
						Nearest = {item.Nearest}
						
				/>
		</li>) ): (<p>Loading...</p>)}
	</ul>)
}

export default OrderList;
