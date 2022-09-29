const obj={
    first_name:"dharam",
    last_name:"kumar",
    age:34,
    fullName:function(){return this.first_name+" "+this.last_name}
};

console.log(obj);
console.log(obj.fullName());


const obj2=new Object();
obj2.name="rahul";
obj2.age="24";
console.log(obj2);


const obj3=Object.create(obj);
obj3.first_name="ram";
obj3.last_name="raj";
obj3.age=55;
console.log(obj3);
console.log(obj3.fullName());