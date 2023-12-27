import React from 'react';
import OrderItemPic from "../OrderItemPic/OrderItemPic.jsx";
import './OrderCompositionItem.css';
import Leaflet from "../Leaflet/Leaflet.jsx";
import OrderCompositionDetails from "../OrderCompositionDetails/OrderCompositionDetails.jsx";

const OrderCompositionItem = (props) => {
	const {ProductName, PictureId, Price, Quantity, Products, CatalogName} = props;
	return (
			<>
			<li className={'list-group-item order_list-group-item'}>
				<div className='item_name_composition'>
					<OrderItemPic PictureId={PictureId}/>
					<div className='product_subproduct_item'>
					<p className={'product_name'}>{ProductName} </p>
						<p className='item_subproduct'>{CatalogName}</p>
					{Products && Products.map((item)=>(
							<div className='item_subproduct' key={item.RowId}>— {item.ProductName} {item.Quantity}</div>
					))}
					</div>
				</div>
				<div className='item_quantity_composition'>
					<p className='item_text_quantity_composition'>{Quantity}шт.</p>
					<p  className='item_text_price'>{Price}₽</p>
				</div>
			</li>
			</>
	);
};

export default OrderCompositionItem;
