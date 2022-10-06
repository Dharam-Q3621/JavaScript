let arr=[1,2,3];

// let [a,b,c]=arr;
// console.log(a,b,c);


// let [a,,c]=arr;
// console.log(a,c);

let arr2=[1,2];
// let [a,b,c]=arr2;
// console.log(a,b,c);

let [a,b,c="default"]=arr2;
console.log(a,b,c);


let x=3;   
let y=4;
 [y,x]=[x,y];
console.log(x,y);
