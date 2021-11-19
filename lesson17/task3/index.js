export const defer = (func, ms) => {
  return function () {
    // eslint-disable-next-line prefer-rest-params
    setTimeout(() => func(...arguments), ms);
  };
};

// test
const mult = (num1, num2) => {
  console.log(num1 * num2);
};

const defferMult = defer(mult, 1500);
defferMult(5, 5);
