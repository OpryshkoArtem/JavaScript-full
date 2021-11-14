const multiRound = num => [
		(Math.floor(num * 100) / 100),
		(Math.trunc(num * 100) / 100),
		(Math.ceil(num * 100) / 100),
		(Math.round(num * 100) / 100),
		(+num.toFixed(2)),
	];



// examples
 const num1 = 11.12556;
 const num2 = 6.112;

 console.log(multiRound(num1));
 console.log(multiRound(num2));
