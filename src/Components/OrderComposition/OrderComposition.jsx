import React, {useEffect, useState} from 'react';
import {getOrder} from "../../api/ApiRequst.js";
const OrderComposition = (id) => {
	console.log(id)
	let order = null
	getOrder(id).then(async newOrder => {
		console.log(JSON.stringify(newOrder))
			order = JSON.stringify(newOrder)
		})

	return (
			<div>
			
			</div>
	)
};

export default OrderComposition;
