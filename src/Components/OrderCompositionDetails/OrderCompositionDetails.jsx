import getUserTime from "../../utils/dateConverter.js";

const OrderCompositionDetails = ({data}) => {

	return (<>
		<div>
			<p>Оплата:{data.item.PaymentType}</p>
			<p>Желаемое время получения: {getUserTime(new Date(data.item.WishingDate))}</p>
			<p>Ближайшее время: {getUserTime(new Date(data.item.Nearest)) && 'Да'}</p>
			<p>Время заказа: {getUserTime(new Date(data.item.DateOrder))}</p>
			<p>Время потверждения заказа: {getUserTime(new Date(data.item.DateComplete))}</p>
			<p>Время сборки заказа: {getUserTime(new Date(data.item.DateLink))}</p>
			<p>Время вручения заза(завершения): {getUserTime(new Date(data.item.DateReceipt))}</p>
			<p>Сумма заказа: {data.item.Price}₽</p>
		</div>
	</>)

};

export default OrderCompositionDetails;
