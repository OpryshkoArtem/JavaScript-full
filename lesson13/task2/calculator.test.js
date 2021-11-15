import getSum, {getSquaredArray, getOddNumbers} from "./calculator";

it ('should get squared numbers of array', () => {
	const result = getSquaredArray([2, 3, 4]);

	expect(result).toEqual([4, 9, 16]);
});


it ('should get all odd numbers', () => {
	const result = getOddNumbers([1, 2, 3, 4, 5]);

	expect(result).toEqual([1, 3, 5]);
});


it ('should get all odd numbers', () => {
	const result = getSum(5, 5);

	expect(result).toEqual(10);
});