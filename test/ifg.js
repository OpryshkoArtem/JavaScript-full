// function showSum3() {
//   // eslint-disable-next-line prefer-rest-params
//   console.log(arguments);
// }
// showSum3(10, 15, 'pop');

// var a = 1;

// console.log(window.a);

// const b = 2;

// console.log(window.b);

/* function foo() {
	console.log( this.a);
}

var obj = {
	a: 2,
	foo: foo
}

var bar = obj.foo;		// створюємо псевдоним (alias) на функцію

var a = "oops, global";		// 'a' являється глобальною перемінною

bar();
*/

// const prod1 = {
//   name: 'Intel',
//   price: 100,
//   getName() {
//     console.log(this.name);
//   },
// };

// prod1.getName();

// const prod2 = {
//   name: 'AMD',
//   price: 50,
// };

// prod2.getName = prod1.getName;

// console.log(prod2);

// prod1.getName.apply(prod2);

///  Constructor
function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
  };
}

const user1 = new User('Ann', 14);
const user2 = new User('John', 56);
const user3 = new User('Roger', 36);

user1.sayHi();
user2.sayHi();
user3.sayHi();