const transformToObject = arr => {
	const obj = {};
	arr.forEach(element => {obj[element] = element});
	console.log(obj);
	return obj;
 };

 // examples
 // transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }