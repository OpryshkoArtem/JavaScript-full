const getAdults = obj =>
		Object.entries(obj)
		.filter(arr => arr[1] >= 18)
		.map(name => name[0]);

// const users = {
// 	'John Doe': 19,
// 	'Tom': 17,
// 	'Bob': 18,
// };

// console.log(getAdults(users));