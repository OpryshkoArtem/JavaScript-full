const getParsedIntegers = arr => arr.map(item => Number.parseInt(item));

const getParsedIntegersV2 = arr => arr.map(item => parseInt(item));

const getParsedFloats = arr => arr.map(item => Number.parseFloat(item));

const getParsedFloatsV2 = arr => arr.map(item => parseFloat(item));



// examples
const randomArr = ['   123     ', '45kg', -89, 'dog', 4.98, 'John', 0.597];

console.log(getParsedIntegers(randomArr));
console.log(getParsedIntegersV2(randomArr));
console.log(getParsedFloats(randomArr));
console.log(getParsedFloatsV2(randomArr));