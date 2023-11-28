

function _addLeadingZero(num) {
	return num < 10 ? "0" + num : num;
}

function getUserTime(date) {
	let t = date.getTime() - 840 * 60 * 1000;
	let h = _addLeadingZero(date.getHours());
	let m = _addLeadingZero(date.getMinutes());
	let month = _addLeadingZero(date.getMonth());
	return `${h}:${m}`;
}

export default getUserTime;
