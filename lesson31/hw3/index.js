export const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

// test data
// delay(3000).then(() => console.log('Done'));
// delay(500).then(() => console.log('ok'));
// delay(5000).then(() => console.log('ok'));
