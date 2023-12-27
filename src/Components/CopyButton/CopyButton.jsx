import React from 'react';
import copy from 'clipboard-copy';

const CopyButton = ({ text }) => {
	const handleCopy = () => {
		copy(text)
				.then(() => {
					console.log('Текст скопирован в буфер обмена!');
				})
				.catch((err) => {
					console.log('Не удалось скопировать текст: ' + err);
				});
	};
	
	return (
			<div>
				<button onClick={handleCopy}>Копировать токен</button>
			</div>
	);
};

export default CopyButton;
