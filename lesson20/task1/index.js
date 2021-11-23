class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return {
      name: '',
      age: null,
    };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }

    this.age = value;
    if (value >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }

    return this.age;
  }
}

// for example
const user1 = new User('John', 33);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(24);
console.log(User.createEmpty());
const user2 = User.createEmpty();
console.log(user2);

console.log(user1.age);

// class StaticMethodCall {
//   constructor() {
//     console.log(StaticMethodCall.staticProperty); // 'static property'
//     console.log(this.constructor.staticProperty); // 'static property'
//     console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
//     console.log(this.constructor.staticMethod()); // 'static method has been called.'
//   }

//   static staticProperty = 'static property';
//   static staticMethod() {
//     return 'static method has been called.';
//   }
// }

// const userr = new StaticMethodCall();
