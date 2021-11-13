const arrAverage = arr => {
	if(!Array.isArray(arr)) {
		return null;
	}

	return (arr.reduce((accum, elem) => accum + elem)) / arr.length;
}

// example
const someArr = [2, 5, 6, 3];
console.log(arrAverage(someArr));
