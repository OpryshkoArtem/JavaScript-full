const sortDesc = arr => {
	const copyArr = arr.slice(arr).sort((a, b) => b - a);
	return copyArr;
}

const randArr = [56, 44, 2, 15, 46, 7, 91];

console.log(sortDesc(randArr));