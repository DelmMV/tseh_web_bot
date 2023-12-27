import React, {useEffect, useState} from 'react';
import {getPicture} from "../api/ApiRequst.js";

const UseFetchPictures = (id) => {
	
	const [picture, setPicture] = useState(null);
	const [isLoadingImage, setLoadingImage] = useState(true);
	
	useEffect(() => {
		
		getPicture(id).then(async newImage => {
			setPicture(newImage);
			setLoadingImage(false);
		})
	}, [])
	
	return { picture, isLoadingImage }
};

export default UseFetchPictures;

