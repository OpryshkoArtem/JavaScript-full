const getTimes = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setTimes = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = initDate => {
  let result = new Date(initDate);
  const dateConversion = {
    add(type, number) {
      result = new Date(result[setTimes[type]](result[getTimes[type]]() + number));
      return this;
    },
    subtract(type, number) {
      result = new Date(result[setTimes[type]](result[getTimes[type]]() - number));
      return this;
    },
    result() {
      return result;
    },
  };
  return dateConversion;
};

// test data
// const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
//   .add('minutes', 2)
//   .add('days', 8)
//   .subtract('years', 1)
//   .result();
// console.log(res); // Jan 15 2019 17:19:17
// new Date(2020, 0, 7, 17, 17, 17)
