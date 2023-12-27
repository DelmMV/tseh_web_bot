import './Header.css'
import {useEffect, useState} from "react";
import NavTab from "../NavTab/NavTab.jsx";
import useAuth from "../../hooks/useAuth.js";
import {useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";
import CopyButton from "../CopyButton/CopyButton.jsx";
function Header(props) {
	const {signOut} = useAuth()
	const {data: initialData, intensive, setData} = props;
	const [getIntensive, setGetIntensive] = useState([])
	const [filteredData, setFilteredData] = useState([]);
	const navigate = useNavigate();
	
	useEffect(() => {
		if (initialData && initialData.length > 0 && intensive && intensive.Name) {
			const filtered = initialData.filter(item => item.CheckoutUserName === intensive.Name);
			setFilteredData(filtered);
		}
	}, [initialData, intensive]);
	useEffect(() => {
		setGetIntensive(intensive)
	}, [intensive])
	return (
			
			<div className='header'>
				<nav className="navbar shadow-p fixed-top bg-body-tertiary">
					<div className='block_top'>
						<div className="block_left">
							<button className="btn btn-primary shadow-lg m-1" type="button" data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
								Меню
							</button>
						</div>
						
						<NavTab/>
						
						<div style={{ width: '78vw' }} className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1"
								 id="offcanvasWithBothOptions"
								 aria-labelledby="offcanvasWithBothOptionsLabel">
							<div className="offcanvas-header">
								<div className='canvas_link'>
									<NavLink className='nav_link' to='/'>Главная</NavLink>
									<NavLink className='nav_link' to='/map'>Карта</NavLink>
								</div>

								<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
												aria-label="Close"></button>
							</div>
							<div className="offcanvas-body canvas_body" >
								<h6 className="offcanvas-title"
										id="offcanvasWithBothOptionsLabel">{getIntensive ? getIntensive.Name : 'load'}</h6>
									<div>{getIntensive ? getIntensive.ShopName : 'load'}</div>
									<div>
										Интенсив: {getIntensive ? getIntensive.AddDeliveryTime : 'load'}
									</div>
									<div className={'delivered'}>
										Доставленно: {filteredData.length}
									</div>
									<div className={'delivered_all'}>
										Всего: {initialData.length}
									</div>
									<CopyButton text={localStorage.getItem("AccessToken")}/>
									<div>
										<button onClick={() => signOut(()=> navigate('/', {replace: true}))}>exit</button>
								</div>
		
							</div>
						</div>
					</div>
				
				</nav>
			</div>)
}

export default Header
