export function sumOfSquares() {
  // return [...arguments].reduce((acc, el) => (acc + (el*el)), 0);  //  variant
  return [].reduce.call( arguments, (acc, el) => {return acc + el * el}, 0,);
}

// for expample
console.log(sumOfSquares(1, 2, 3, 4, 5));
