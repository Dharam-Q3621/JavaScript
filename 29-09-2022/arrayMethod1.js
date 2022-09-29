var arr = [22, 33, 44, 11, 12, 45];

arr.pop();
arr.push("99");
arr.shift();
arr.unshift("88")

console.log(arr);
console.log(typeof arr);
console.log(arr instanceof Object);
console.log(Array.isArray(arr));

var arr1 = [22, 33, 44, 11, 12, 45];
console.log("arr1-string- ",arr1.toString(),"\n");

arr.sort();
console.log(arr);

var strArr = ["ram", "shyam", "bali", "mahesh", "rahul", "aman"];

strArr.sort();
console.log(strArr);

var arr2 = [22, 33, 44, 11, 12, 45, 5, 3, 9];


arr2.sort((a, b) => { return a - b });
console.log(arr2);

arr2.sort((a, b) => { return b - a });
console.log(arr2);


var strArr2 = ["ram", "shyam", "bali", "mahesh", "rahul", "aman"];

strArr2.splice(4);
console.log(strArr2);

strArr2.splice(2, 1, "aaaa", "bbbb", "cccc");
console.log(strArr2);

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits)
// const citrus = fruits.slice(3);
const citrus = fruits.slice(1, 3);
console.log(citrus) ;

var arr3 = [22, 33, 44, 11, 12, 45];
var arr4 = [22, 33, 44, 11, 12, 45];

//concat
var contArr=arr3.concat(arr4);
console.log(contArr);

// join
var arr5=arr3.join("-");// return string
console.log(arr5);

//reverse 
var arr6=arr4.reverse();
console.log(arr6)

