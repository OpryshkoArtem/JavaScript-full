export function saveCalls(func, ...args) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, args);
  }
  withMemory.calls = [];

  return withMemory;
}

// for example

// function test(a, b) {
//   return a + b;
// }
// const testWithMemory = saveCalls(test);
// testWithMemory(2, 3);
// testWithMemory(4, 5);

// console.log(testWithMemory.calls);

// const user = {
//   name: 'Bob',
//   sayHi() {
//     return this.name;
//   },
// };

// const methodWithMemory = saveCalls(user.sayHi);
// methodWithMemory.apply({ name: 'Tomas' });
// console.log(methodWithMemory.calls);
