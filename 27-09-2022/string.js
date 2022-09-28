const name = "dharam";

console.log(name.charAt(0));
console.log(name[0]);


const name2="       Rahul   ";
console.log(name2.trim());// remove white space frome left and right

const name3="2+2";

console.log(name3);
console.log(eval(name3));
console.log(parseInt(name3));// return 2


const name4=new String("2+3");

console.log(name4);// string 2+3
console.log(eval(name4)); //string 2+3
console.log(name4.valueOf());//string 2+3
console.log(eval(name4.valueOf())); // 5

