import React from 'react';
import useFetchPictures from "../../hooks/useFetchPictures.js";
import './OrderItemPic.css'

const OrderItemPic = (props) => {
	const {picture, isLoadingImage} = useFetchPictures(props.PictureId)
	return (
			<div className={'pic_item'}>
				{!isLoadingImage ? <img className={'pic'} width={45} height={45} src={picture}/> : <p>Loading...</p>}
			</div>
	);
};

export default OrderItemPic;
