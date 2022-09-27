
let X = 8; 
console.log(X); // 5

X= 6; 
console.log(X); // 3

// const x = 5;
// x = 10;  // Error
// console.log(x)

// const greet = 'Hello';
// const name = 'Jack';

// console.log(greet + ' ' + name);


const name = 'sita';
const name1 = "rahul";
const result = `The name are ${name} and ${name1}`;

const number1 = 8/0;
console.log(number1); // Infinity

const number2 = -5/0;
console.log(number2); // -Infinity

// strings can not  be divided by numbers
const number3 = "afc"/6; 
console.log(number3);  // NaN

let name3;
console.log(name3); // undefined

let name4 = undefined;
console.log(name4); // undefined

const name5 = 'ram';
typeof(name5); // returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

const a = null;
typeof(a); // returns "object"
