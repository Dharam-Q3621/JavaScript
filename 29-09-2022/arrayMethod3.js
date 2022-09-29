
//entries method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let data=fruits.entries();

for(let value of fruits){
    console.log(value);
}
for(let value of data){
    console.log(value[0]+1+" - "+ value[1]);
}


const ages = [32, 33, 16, 40];


//every method
let everyMethod=ages.every((value)=>{
    return value>12;    
})
console.log(everyMethod);


//some method
let someMethod=ages.some((value)=>{
    return value<12;    
})
console.log("some - "+someMethod);
//reduce method
let reduceMethod=ages.reduce((total,value)=>{
return total+value;
})

console.log(reduceMethod);