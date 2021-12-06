export const pinger = (count, period) => {
  // put your code here
  let initialValue = count;
  const interval = setInterval(() => {
    if (initialValue-- > 0) {
      console.log('Ping');
    } else {
      clearInterval();
    }
  }, period);
};

// examples
// pinger(5, 100); // makes 5 writes with 100 ms interval
// pinger(7, 1500); // makes 7 writes with 1500 ms interval
