// const user = {
//   firstName: 'John',
//   lastName: 'Vick',
//   age: 30,
// };

// user.sayHi = function () {
//   console.log('Hello!');
// };

// console.log(user);

// user.sayHi();

// function adios() {
//   console.log('Adios!!!');
// }

// user.adios = adios;
// console.log(user);

// user.adios();

// const user2 = {
//   sayBark() {
//     console.log('Gav-gav');
//   },
//   sayBark2() {
//     console.log('Gavvvv-gavvvvv');
//   },
// };

// user2.sayBark();
// user2.sayBark2();

// let user3 = {
//   firstName: 'John',
//   lastName: 'Vick',
//   age: 30,
//   sayHi() {
//     console.log(this.firstName);
//   },
// };

// user3.sayHi();

// let admin = user3;
// admin.sayHi();

// user3 = null;

// admin.sayHi();

// ==========================
// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   alert( this.name );
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;
// console.log(user, admin);

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)

// admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// Правило простое: при вызове obj.f() значение this внутри f равно obj. Так что, в приведённом примере это user или admin.

// ============================

// 'use strict';

// function helloWorld() {
//   console.log(this);
// }
// helloWorld();

// const user = {
//   name: 'Джон',
//   hi() {
//     console.log(this.name);
//   },
//   bye() {
//     console.log('Пока');
//   },
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
// (user.name === 'Джон' ? user.hi : user.bye)(); // Ошибка!

/* Присмотревшись поближе, в выражении obj.method() можно заметить две операции:

Сначала оператор точка '.' возвращает свойство объекта – его метод (obj.method).
Затем скобки () вызывают этот метод (исполняется код метода). */

// Здесь hi = user.hi сохраняет функцию в переменной, и далее в последней строке она вызывается полностью сама по себе, без объекта, так что нет this.

// Для работы вызовов типа user.hi(), JavaScript использует трюк – точка '.' возвращает не саму функцию, а специальное значение «ссылочного типа», называемого Reference Type.

// Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется внутри языка.

// Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:

// base – это объект.
// name – это имя свойства объекта.
// strict – это режим исполнения. Является true, если действует строгий режим (use strict).
// Результатом доступа к свойству user.hi является не функция, а значение ссылочного типа. Для user.hi в строгом режиме оно будет таким:

// // значение ссылочного типа (Reference Type)
// (user, "hi", true)
// Когда скобки () применяются к значению ссылочного типа (происходит вызов), то они получают полную информацию об объекте и его методе, и могут поставить правильный this (=user в данном случае, по base).

// Ссылочный тип – исключительно внутренний, промежуточный, используемый, чтобы передать информацию от точки . до вызывающих скобок ().

// При любой другой операции, например, присваивании hi = user.hi, ссылочный тип заменяется на собственно значение user.hi (функцию), и дальше работа уже идёт только с ней. Поэтому дальнейший вызов происходит уже без this.

// Таким образом, значение this передаётся правильно, только если функция вызывается напрямую с использованием синтаксиса точки obj.method() или квадратных скобок obj['method']() (они делают то же самое). Позднее в этом учебнике мы изучим различные варианты решения проблемы потери значения this

/* let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    );
  }
};

group.showList(); */

/* const chel = {
  age: 55,
  getAge() {
    function show() {
      console.log(this);
    }

    show();
  },
};
chel.getAge(); */

const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}

sayName.call(student);
sayName.call({ name: 'Bruce' });

const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

greeting.call(company, 'Bob', 'Marly');

const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

const result = getPopulation.call(country, 43000);
console.log(result);

const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

console.log(transaction.printTransaction.call(anotherTransaction));
