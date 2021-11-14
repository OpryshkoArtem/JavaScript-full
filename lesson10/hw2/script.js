const getRandomNumbers = (length, from, to) => {
	// put your code here
	if (Math.abs(from) < 1 && Math.abs(to) < 1) {
		return null;
	}

	from = Math.ceil(from);
	to = Math.floor(to);

	const arr = [];

	for (let i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * (to - from + 1)) + from;
	}

	return arr;
 };




 // examples
 console.log(getRandomNumbers(5, -0.1, 0.22)); // ==> [2, 2, 2, 3, 2]
 console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
 console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]