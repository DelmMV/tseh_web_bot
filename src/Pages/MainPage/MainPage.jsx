import Header from "../../Components/Header/Header.jsx";
import OrderList from "../../Components/OrderList/OrderList.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import {dataJson} from "../../data/data.jsx";
function MainPage() {
return (
		<>
			<Header/>
			<OrderList
				data = {dataJson}
			/>
			<Footer/>
		</>
)
}

export default MainPage
