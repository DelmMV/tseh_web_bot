import './Header.css'
import {useEffect, useState} from "react";

function Header(props) {
	
	const { data: initialData, intensive } = props;
	const [filteredData, setFilteredData] = useState([]);
	useEffect(() => {
		if (initialData && initialData.length > 0 && intensive && intensive.Name) {
			const filtered = initialData.filter(item => item.CheckoutUserName === intensive.Name);
			setFilteredData(filtered);
		}
	}, [initialData, intensive]);
	
	return (
			<div className={'header'}>
				<div className={'block_top'}>
					<div className={'delivered'}>
						Доставленно: {filteredData.length}
					</div>
					<div className={'delivered_all'}>
						Всего: {initialData.length}
					</div>
				</div>
			</div>
	)
}

export default Header
