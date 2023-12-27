import React, { useContext, useEffect } from 'react';
import './NavTab.css';
import AppContext from '../../contexts/AppContext.jsx';

const NavTab = () => {
	const { setValue, value } = useContext(AppContext);
	
	// Получение значения из localStorage при загрузке компонента
	useEffect(() => {
		const storedValue = localStorage.getItem('tabValue');
		if (storedValue) {
			setValue(Number(storedValue)); // Преобразуем полученное значение в число при необходимости
		}
	}, [setValue]);
	
	// Обновление localStorage при изменении значения
	useEffect(() => {
		localStorage.setItem('tabValue', value);
	}, [value]);
	
	const handleTabClick = (newValue) => {
		setValue(newValue);
	};
	
	return (
			<div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<button
								className={`nav-link shadow-lg m-1 ${value === 1 ? 'active' : ''}`}
								onClick={() => handleTabClick(1)}
								type="button"
								role="tab"
								aria-controls="home-tab-pane"
								aria-selected={value === 1 ? 'true' : 'false'}
						>
							Активные
						</button>
					</li>
					<li className="nav-item">
						<button
								className={`nav-link shadow-lg m-1 ${value === 2 ? 'active' : ''}`}
								onClick={() => handleTabClick(2)}
								type="button"
								role="tab"
								aria-controls="profile-tab-pane"
								aria-selected={value === 2 ? 'true' : 'false'}
						>
							Полученные
						</button>
					</li>
				</ul>
			</div>
	);
};

export default NavTab;
