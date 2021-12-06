export const calc = startValue => {
  let res = startValue;
  const calulator = {
    add(value) {
      res += value;
      return this;
    },
    multi(value) {
      res *= value;
      return this;
    },
    div(value) {
      res /= value;
      return this;
    },
    substract(value) {
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
// const result = calc(3).add(2).multi(4).div(10).substract(5).result();
// console.log(result);
