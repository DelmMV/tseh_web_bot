import {Placemark} from "@pbe/react-yandex-maps";
import React from "react";

const CustomMarker = ({ geometry, icon, orderNumber, time, Address }) => {
	return (
			<Placemark
					geometry={geometry}
					options={{
						preset: icon,
						//iconImageHref: icon, // ссылка на ваше изображение для маркера
						//iconImageSize: [30, 30],
						iconImageOffset: [-15, -15],
					}}
					properties={{
						hintContent: `Order: ${orderNumber}, Time: ${time}, Address: ${Address}`,
					}}
					modules={['geoObject.addon.balloon']}
					instanceRef={(ref) => {
						if (ref) {
							ref.properties.set({
								balloonContentBody: `
              <div>
                <div>Заказ: ${orderNumber}</div>
                <div>Время: ${time}</div>
                <div>Адрес: ${Address}</div>
              </div>
            `,
							});
						}
					}}
			/>
	);
};

export default CustomMarker
