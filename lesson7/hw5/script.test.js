import { withdraw } from "./script";

it ('should withdraw money from the client', () => {
	const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
	expect(result).toEqual(37);
});

it ('should not enough money', () => {
	const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
	expect(result).toEqual(-1);
});

it ('should withdraw money from the client', () => {
	const result = withdraw(['Ann', 'John', 'User'], [50, 87, -6], 'Ann', 50);
	expect(result).toEqual(0);
});
