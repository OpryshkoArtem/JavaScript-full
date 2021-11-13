const flatArray = arr => {
	const copyArr = arr.slice(arr).flat().sort((a, b) => a - b);
	return copyArr;
}

// Exp.
// let newArr = [[1, 4], [3, 6], 5];
// console.log(flatArray(newArr));