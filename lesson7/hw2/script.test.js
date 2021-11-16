import { reverseArray } from "./script";

it ('should get not array', () => {
	const result = reverseArray('str');
	expect(result).toEqual(null);
});

it ('should get reverse array', () => {
	const result = reverseArray([1, 2, 3]);
	expect(result).toEqual([3, 2, 1]);
});

it ('should get wrong sequence', () => {
	const result = reverseArray([1, 2, 3]);
	expect(result).not.toEqual([2, 3, 1]);
});


// it ('', () => {
	// const result = ;
	// expect(result).toEqual();
// });