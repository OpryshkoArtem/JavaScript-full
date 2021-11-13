const getTotalRevenue = transactions => {
	let total = 0;
	const arr = transactions.map(item => Object.entries(item)).flat();
	const res = arr.map(elem => {
		if (elem[0] == 'amount') {
			total += elem[1];
		}
	});
	return total;
 };

 // examples
 const dayTransactions = [
	{ userId: 22, amount: 60, operation: 'sell' },
	{ userId: 22, amount: 160, operation: 'buy' },
	{ userId: 44, amount: 90, operation: 'sell' },
 ];

 const result = getTotalRevenue(dayTransactions); // ==> 310
 console.log(result);