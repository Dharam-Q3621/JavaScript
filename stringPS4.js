const str="dhar\"";

console.log(str.length);

const str2="hello Rahul, how are you bro? are you ok?";
let word="how"
console.log(str2.includes(word));

console.log(`In this sentence ${word} ${str2.includes(word)? "is" :"is not"} here`);
console.log(str2.startsWith("hello"));
console.log(str2.endsWith("?"));


const name="DHARMENDRA";
console.log(name.toLowerCase());


const str3="please give rs 1000";
let amountn=str3.slice(-4);
console.log(amountn);


let amount2=str3.slice(-("1000".length));
console.log(amount2);


let amount3=str3.slice(("please give rs ".length));
console.log(amount3);


let amount4=Number.parseInt(str3.slice(15));
console.log(typeof(amount4));
