var a = 17;

if (a) {
  var a = 1;    //  а => вспливає вгору і перезаписує  а

  console.log(a);     // =>  1
}

console.log(a);   // =>  1




// var a = 17;

// if (a) {
//   let a = 1;

//   console.log(a);
// }

// console.log(a);