const reverseArray = arr => {
	if(!Array.isArray(arr)) {
		return null;
	}

	return [...arr].reverse();
}

//  example
// const someArr = [1, 2, 3, 4, 5];
// console.log(reverseArray(someArr));