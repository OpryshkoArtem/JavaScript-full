const splitText = (text, num) => {
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
		result.push(unit[0].toUpperCase() + unit.slice(1));
		startIndex += num;
	}

	return result.join('\n');
};


// splitText('abcd efg', 4) => 'Abcd\n efg\nH...'
// text[0].toUpperCase() + text.slice(1);
 // for examle
console.log(splitText('abcd efghabcd efghabcd efgh', 5));