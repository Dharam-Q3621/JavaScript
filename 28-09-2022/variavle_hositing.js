
// variable hoisting

console.log(x); //undefined
var x;

// display value
a = 5;
console.log(a);
var a; // 5
console.log(a);

// console.log(y)// error

var z;
console.log(z);// undefined

// display value
b = 5;
console.log(b);
let a; // error
// While using let, the variable must be declared first.

