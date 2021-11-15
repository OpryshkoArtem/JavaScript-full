const splitString = (text, num) => {
	if (typeof(text) !== 'string') {
		return null;
	}
	if (num === undefined || num == 0) {
		num = 10;
	}

	const result = [];
	let startIndex = 0;

	while(true) {
		const unit = text.substr(startIndex, num);
		if (unit.length === 0) {
			break;
		}
		result.push(unit);
		startIndex += num;
	}

	if ((num - (result[result.length-1]).length) > 0) {
			result[result.length-1] = result[result.length-1].padEnd(num, '.');
		}

	return result;
};


 // for examle
console.log(splitString('abcd efghabcd efghabcd efgh', 5));

// let startIndex = 0;

	// while(true) {
	// 	const unit = text.split('', num);
	// 	if (unit.length === 0) {
	// 		break;
	// 	}
	// 	result.push(unit[0].toUpperCase() + unit.slice(1));
	// 	startIndex += num;
	// }

	// // const diff = num - (result[result.length-1]).length;
	// if ((num - (result[result.length-1]).length) > 0) {
	// 	result[result.length-1] = result[result.length-1].padEnd(num, '.');
	// }