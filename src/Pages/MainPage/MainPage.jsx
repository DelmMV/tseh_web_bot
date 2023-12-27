import Header from "../../Components/Header/Header.jsx";
import OrderList from "../../Components/OrderList/OrderList.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import useFetchData from "../../hooks/useFetchData.js";
import AppContext from "../../contexts/AppContext.jsx";
import { useContext } from "react";
import Spinners from "../../Components/Spinners/Spinners.jsx";
import filterOrder from "../../utils/filterOrder.js";
function MainPage() {
	const {data, intensive, isLoading} = useFetchData()
	const { value } = useContext(AppContext)
	
	let filterData = filterOrder(value, data)

	return (<>{
		isLoading ? (<div><Spinners/></div>) : (<div>
			<Header
					intensive={intensive}
					data={data}
			/>
			<OrderList data={filterData}/>
			<Footer/>
		</div>)}
	</>)
}

export default MainPage
