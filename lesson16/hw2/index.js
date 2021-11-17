let foo = 1;

function bar() {
  if (!foo) {
    var foo = 10;
  }
  return foo;
}

var foo = bar();


console.log(foo);

// щоб у останньому рядку повернуло 1, замінити вар на лет
// var foo = 1;

// function bar() {
//   if (!foo) {
//     let foo = 10;
//   }

//   return foo;
// }

// var foo = bar();

