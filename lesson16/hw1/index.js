export function createArrayOfFunctions(num) {
	let arrayOfFunctions = [];

	if (num === undefined) return arrayOfFunctions;
   if (typeof num != "number") return null;


	for (let i = 0; i < num; i++) {
		arrayOfFunctions[i] = function(){
			return i;
		}
	}
	return arrayOfFunctions;
}


console.log(createArrayOfFunctions(9)[5]());   //    =>   5
// console.log(createArrayOfFunctions());   //    =>   5
console.log(createArrayOfFunctions());   //    =>   5
console.log(createArrayOfFunctions('str'));   //    =>   5