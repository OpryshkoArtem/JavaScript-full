const getTotalPrice = arr => {
	const sum = arr.reduce((acc, elem) => acc + elem);
	return '$' + (Math.floor(sum * 100) / 100);
}

const randArr = [5, 10, -6, 4.497, 33.82544, 764];

console.log(getTotalPrice(randArr));



// (Math.floor((sum * 100) / 100).toFixed(2)