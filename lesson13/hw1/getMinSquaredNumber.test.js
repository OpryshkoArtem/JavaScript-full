import getSquareNumModulo from "./getMinSquaredNumber.js"

it ('should get square minNumber if input: empty array', () => {
	const result = getSquareNumModulo([]);
	expect(result).toEqual(null);
});

it ('should get square minNumber if input: string', () => {
	const result = getSquareNumModulo('str');
	expect(result).toEqual(null);
});

it ('should get square minNumber from array', () => {
	const result = getSquareNumModulo([-777, 3, -2, 6, 45, -20]);
	expect(result).toEqual(4);
});