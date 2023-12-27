
function filterOrder(value, item) {
	if (value === null || undefined) {
		return item;
	} else if (value === 1) {
		return [
			...item.filter(
					(e) => e.Status === 5 || e.Status === 6 || e.Status === 12
			),
		];
	} else if(value === 2){
		return [...item.filter((e) => e.Status === 7)];
	}
}

export default filterOrder
