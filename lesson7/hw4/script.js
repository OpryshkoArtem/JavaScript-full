const cloneArr = arr => {
	if(!Array.isArray(arr)) {
		return null;
	}
	return [...arr];
}

// example
// const someArr = ['bob', 'cat', 'jhon', 'dog'];
// console.log(cloneArr(someArr));
