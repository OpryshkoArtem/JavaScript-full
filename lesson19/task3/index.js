export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (value) {
  if (value < 0) {
    return false;
  }

  if (value >= 25) {
    this.age = value;
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
};

const user = new User('John', 17);

// user.sayHi();
// user.requestNewPhoto();
user.setAge(27);

// console.log(user);
