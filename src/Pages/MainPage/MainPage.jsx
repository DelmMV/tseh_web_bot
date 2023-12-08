import Header from "../../Components/Header/Header.jsx";
import OrderList from "../../Components/OrderList/OrderList.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import {getOrder} from "../../api/ApiRequst.js";

function MainPage() {
	const {data, intensive, order} = useFetchData()
	
		return (
		<>
			<Header
					intensive={intensive}
					data = {data}
			/>
			<OrderList
				data = {data}
				order = {order}
			/>
			<Footer
					intensive={intensive}
			/>
		</>
	)
}

export default MainPage
