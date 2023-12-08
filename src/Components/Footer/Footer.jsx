import './Footer.css'
import {useEffect, useState} from "react";

function Footer(props) {
	const {intensive}= props
	const [getIntensive, setGetIntensive] = useState([])
	
	useEffect(() => {
		setGetIntensive(intensive)
	}, [intensive])
	return (
			<div className={'footer'}>
				<div className={'block_bottom'}>
					<div className={'store'}>
						{getIntensive ? getIntensive.ShopName : 'load'}
					</div>
					<span className={'intensive'}>
					Интенсив: {getIntensive ? getIntensive.AddDeliveryTime : 'load'}
				</span>
				</div>
			</div>
	)
}

export default Footer
