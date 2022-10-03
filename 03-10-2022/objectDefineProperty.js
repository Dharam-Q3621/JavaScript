let student = {
  name: "Mohan",
};

Object.defineProperty(student, "id", {
  value: 2,
  // writable:true,// for change the id
  enumerable: true,
});

console.log(student.id);
student.id = 4;
console.log(student.id);

const obj = {
  first_name: "pawan",
  last_name: "kumar",
  age: 24,
  fullName: function () {
    return this.first_name + " " + this.last_name;
  },
};

console.log(obj);
console.log(obj.fullName());

const obj2 = new Object();
obj2.name = "sonu";
obj2.age = "36";
console.log(obj2);

const obj3 = Object.create(obj);
obj3.first_name = "ram";
obj3.last_name = "raj";
obj3.age = 55;
console.log(obj3);
console.log(obj3.fullName());
