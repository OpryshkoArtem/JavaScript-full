it ('17 equals 17', () => {
	expect(17).toEqual(17);
});

it ('17 equals 18', () => {
	expect(17).not.toEqual(18);
});

const getEvenNumbers = arr => arr.filter(elem => elem % 2 === 0);

it('should get all even number from array', () => {
	const result = getEvenNumbers([1, 2, 3, 4, 5]);
	expect(result).toEqual([2, 4]);
});