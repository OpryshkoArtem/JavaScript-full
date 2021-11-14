const getMaxAbsoluteNumber = arr => {
	if(!Array.isArray(arr) || (arr.length === 0)) {
		return null;
	}
	const absNumArr = arr.map(num => Math.abs(num));
	return Math.max(...absNumArr);


	// another variant
	// let maxNumb = -Infinity;
	// arr.forEach(num => {
	// 	if(Math.abs(num) > maxNumb){
	// 		maxNumb = Math.abs(num);
	// 	}
	// });
	// return maxNumb;
 };




 // examples
 console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
 console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
 console.log(getMaxAbsoluteNumber([])); // ===> 6
 console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777