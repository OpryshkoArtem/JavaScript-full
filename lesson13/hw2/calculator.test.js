import {calc} from "./calculator.js";

it ('should get the sum of numbers', () => {
	const result = calc('5 + 5');
	expect(result).toEqual('5 + 5 = 10');
});

it ('should get the subtraction of numbers', () => {
	const result = calc('6 - 46');
	expect(result).toEqual('6 - 46 = -40');
});

it ('should get the multiplication of numbers', () => {
	const result = calc('0.5 * 5');
	expect(result).toEqual('0.5 * 5 = 2.5');
});

it ('should get the division of numbers', () => {
	const result = calc('9 / 3');
	expect(result).toEqual('9 / 3 = 3');
});

it ('should get null if input is not a string', () => {
	const result = calc(49 + 8);
	expect(result).toEqual(null);
});