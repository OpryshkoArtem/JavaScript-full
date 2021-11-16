// 'use strict'

let memory = 0;
export function add(num) {
	memory += num;
}
export function decrease(num) {
	memory -= num;
}
export function reset() {
	memory = 0;
}
export function getMemo() {
	return memory;
}
function createCalculator() {
	return {
		add,
		decrease,
		reset,
		getMemo,
	}
}

const calc = createCalculator();
calc.add(15)
console.log(memory);
calc.add(15)
console.log(memory);
console.log(calc.getMemo());
calc.decrease(10)
console.log(memory);
calc.getMemo()
console.log(memory);
calc.reset()
console.log(memory);
