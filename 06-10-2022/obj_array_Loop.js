let arr=[1,2,54,6,7];
for(let number of arr){
    console.log(number);//value of array
}
for(let number in arr){
    console.log(number,arr[number]);//index , value 
}


obj={
    name:"rahul",
    age:30,
    num:554455
};

console.log("age" in obj);// return true or false

for(let key in obj){
    console.log(key,obj[key]);// key and value of object
}
