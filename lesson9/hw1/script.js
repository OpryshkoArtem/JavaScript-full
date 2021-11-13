const getKeys = obj => Object.keys(obj).map(el => console.log(el));


const users = {
	'John Doe': 19,
	'Tom': 17,
	'Bob': 18,
};
console.log(getKeys(users));