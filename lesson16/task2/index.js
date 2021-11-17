var arr = [];

for (var i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

export { arr };




// var arr = [];

// for (let i = 0; i < 10; i += 1) {    // == щоб і не вспливало наверх і не записувалося там
//   arr[i] = function () {
//     return i;
//   };
// }

// export { arr };