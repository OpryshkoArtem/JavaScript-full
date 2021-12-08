export const asyncCalculator = numbr =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const square = value * value;
            console.log(`Squared value: ${square}`);
            resolve(square);
          }, 500);
        }),
    )
    .then(
      value =>
        new Promise(resolve => {
          const result = value * 2;
          console.log(`Doubled value: ${result}`);
          resolve(result);
        }),
    );

// test data
// const res = asyncCalculator(5);
// const res2 = asyncCalculator(10);
// const res3 = asyncCalculator(3);
