const squareArray = arr => {
	if(!Array.isArray(arr)) {
		return null;
	}
	const result = arr.map(elem => elem * elem);
	return result;
}

const arrNum = [2, 5, 6, 4, 2, 8];

console.log(squareArray(arrNum));