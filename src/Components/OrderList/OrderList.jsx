import Order from "../Order/Order.jsx";
import  './OrderList.css'

function OrderList({data}) {
	
	
	
	return (<ul className={'list'}>
		{data.map(item => <li className={'item'}>
				<Order
						ClientPhone = {item.ClientPhone}
						WishingDate = {item.WishingDate}
						Status = {item.Status}
						DeliveryNumber = {item.DeliveryNumber}
						Key = {item.OrderId}
						ClientName = {item.ClientName}
						Address = {item.Address}
						ClientComment = {item.ClientComment}
						Wishes = {item.Wishes}
						Nearest = {item.Nearest}
				/>
		</li>)}
	</ul>)
}

export default OrderList;
