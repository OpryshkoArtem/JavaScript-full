export const calc = startValue => {
  let res = startValue;
  const calulator = {
    add(value) {
      res += value;
      return this;
    },
    mult(value) {
      res *= value;
      return this;
    },
    div(value) {
      res /= value;
      return this;
    },
    subtract(value) {
      res -= value;
      return this;
    },
    result() {
      return res;
    },
  };

  return calulator;
};

// test data
// const result = calc(3).add(2).mult(4).div(10).subtract(5).result();
// console.log(result);
