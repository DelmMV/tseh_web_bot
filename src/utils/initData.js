import { init } from '@tma.js/sdk';

const { mainButton, viewport } = init();

mainButton.on('click', () => viewport.expand());

mainButton
		.setBackgroundColor('#ff0000')
		.setTextColor('#ffffff')
		.setText('Expand')
		.enable()
		.show();


