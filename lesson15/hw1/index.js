'use strict'

export function createCalculator() {
	let memo = 0;

	function add(num){
		memo += num;
	}
	function decrease(num){
		memo -= num;
	}
	function reset(){
		memo = 0;
	}
	function getMemo(){
		return memo;
	}

	return {
		add,
		decrease,
		reset,
		getMemo,
	};
};


// for example ============================================
const calc1 = createCalculator();
const calc2 = createCalculator();

calc1.add(42)
console.log(calc1.getMemo());  //  42

calc1.decrease(12)
console.log(calc1.getMemo());  //  30

calc2.add(15)
console.log(calc2.getMemo());  //  15

calc2.decrease(12)
console.log(calc2.getMemo());  //  3

calc1.reset()
console.log(calc1.getMemo());  //  0
calc2.reset()
console.log(calc2.getMemo());  //  0