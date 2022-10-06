// var name="raman";
// var age=34;
// var fullName=function(){ return name+ " kumar"};

// let obj={
//     name,
//     age,
//     fullName
// }

// console.log(obj,obj.fullName());


// -----------------------------------------------
obj2={
    name:"dharam",
    age:20,
    fullName:function(){return name+" kumar"}
}

// let {name:Name,fullName:FULLNAME}=obj2;
// console.log(Name);

let {name,fullName:FULLNAME}=obj2;
console.log(FULLNAME());