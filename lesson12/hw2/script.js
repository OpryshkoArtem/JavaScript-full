const cleanTransactionsList = arr => {
	const res = arr.filter(element => {
		if(typeof Number(element) === 'number' && !isNaN(element)) {
			return element;
		}
	});

	return res.map(elem => '$'.concat((+elem).toFixed(2)));
};


// for example

let randArr = ['  1.9 ', '16.4    ', 17, ' 1 dollar ', '  567   ', '  89cent'];
console.log(cleanTransactionsList(randArr));