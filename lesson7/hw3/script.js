const increaseEvenEl = (arr, delta) => {
	if(!Array.isArray(arr)) {
		return null;
	}

	return arr.map(el => {
		if (el % 2 === 0) {
			el += delta;
		}
		return el;
	});
}