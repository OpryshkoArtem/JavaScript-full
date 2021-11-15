const reverseString = text => {
	if (typeof(text) !== 'string') {
		return null;
	}

	const revers = text.split('').reverse().join('');

	return revers;
}

// for example
const randText = 'Hello!';
// const randText = 359;

console.log(reverseString(randText));