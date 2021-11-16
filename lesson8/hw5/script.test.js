import { getAdults } from "./script";

it ('should get adult people', () => {
	const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
	expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it ('should get empty object', () => {
	const result = getAdults({});
	expect(result).toEqual({});
});

it ('should get function without argument', () => {
	const result = getAdults();
	expect(result).toEqual({});
});









