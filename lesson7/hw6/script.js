const sum = arr => {
	if(!Array.isArray(arr)) {
		return null;
	}
	return arr.reduce((accum, elem) => accum + elem);
}

// example
// const someArr = [2, 5, 6, 3, 0, 3, -1];
// console.log(sum(someArr));
