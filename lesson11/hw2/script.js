const countOccurences = (text, str) => {
	if (str.trim() === '') {
		return null;
	}

	let convertedText = text.toLowerCase();
	let convertedStr = str.toLowerCase();

	let res = [];

	for (let i = 0; i < text.length; i++) {
		let index = convertedText.indexOf(convertedStr, i);
		if (index !== -1) {
			res.push(index);
			i = index;
		}
	}
	return res.length;
}

console.log(countOccurences('kgfmademamamamademade','ma'));