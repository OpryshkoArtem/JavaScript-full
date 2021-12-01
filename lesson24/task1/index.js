const nameOfDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const startDay = new Date(date).getDate();
  const futureDay = new Date(date).setDate(startDay + days);

  return nameOfDays[new Date(futureDay).getDay()];
};

// test data
// const result = dayOfWeek(new Date(2021, 11, 3), 14);
// console.log(result);
