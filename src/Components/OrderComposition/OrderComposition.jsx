import OrderCompositionItem from "../OrderCompositionItem/OrderCompositionItem.jsx";
import './OrderComposition.css'
import React, {useState} from "react";
import Leaflet from "../Leaflet/Leaflet.jsx";
import OrderCompositionDetails from "../OrderCompositionDetails/OrderCompositionDetails.jsx";

const OrderComposition = ({order, isLoading, Latitude, Longitude, data}) => {
	const [showDetails, setShowDetails] = useState(false);
	
	return (<>
				<ul className={'order_composition list-group list-group-flush'}>
					{!isLoading ? order.map((item) => (
							<OrderCompositionItem
							key={item.RowId}
							CatalogId={item.CatalogId}
							CatalogName={item.CatalogName}
							LimitModifiers={item.LimitModifiers}
							Amount={item.Amount}
							PictureId={item.PictureId}
							PictureTime={item.PictureTime}
							Price={item.Price}
							ProductId={item.ProductId}
							ProductName={item.ProductName}
							Quantity={item.Quantity}
							RowId={item.RowId}
							Products={item.Products}
					/>
					)) : <div>Loading</div>}
				</ul>
		<button type="button" className="btn btn-dark" onClick={() => setShowDetails(!showDetails)}>Подробности</button>
		{showDetails && <OrderCompositionDetails data={data}/>}
		
	
	</>)
};

export default OrderComposition;
