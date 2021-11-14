const getFiniteNumbers = arr => arr.filter(item => Number.isFinite(item));

const getFiniteNumbersV2 = arr => arr.filter(item => isFinite(item));

const getNaN = arr => arr.filter(item => Number.isNaN(item));

const getNaNV2 = arr => arr.filter(item => isNaN(item));

const getIntegers = arr => arr.filter(item => Number.isInteger(item));



// examples
const randomArr = ['123', 45, -89, 'dog', 4.98, 'John', 'NaN'];

console.log(getFiniteNumbers(randomArr));
console.log(getFiniteNumbersV2(randomArr));
console.log(getNaN(randomArr));
console.log(getNaNV2(randomArr));
console.log(getIntegers(randomArr));