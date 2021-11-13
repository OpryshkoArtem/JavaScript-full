const getSpecialNumbers = arr => arr.slice(arr).filter(elem => elem % 3 === 0);


//Exp
const randomArr = [5, 8, 6, 2, 4, 3, 9];
console.log(getSpecialNumbers(randomArr));