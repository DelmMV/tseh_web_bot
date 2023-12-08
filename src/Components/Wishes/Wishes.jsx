import React from 'react';
import './Wishes.css'
//import { parseInitData } from '@tma.js/sdk';


const Wishes = ({ClientComment}) => {
	
	// const params = new URLSearchParams(window.location.hash.slice(1));
	// const initDataRaw = params.get('tgWebAppData');
	// const initData = new URLSearchParams(initDataRaw);
	// const idUser = params.get('last_name')
	//
	// const testData = parseInitData(initData)
	
	return (
			<div className={'wishes'}>
				{ClientComment}
				{/*{testData.user.id}*/}
				{/*{testData.user.username}*/}
				{/*{` ${JSON.stringify(testData)} test`}*/}
			</div>
	);
};

export default Wishes;
