let num = 5;
let fact = 1;

while (num != 0) {
  fact *= num;
  num--;
}
console.log(fact);


let num2 = 5;
let  fact2=(num2)=> {
  // let result = 1;
  // if (num2 > 0) {
  //   result *= num2;
    
  //   fact2(num2-1);
  // }
  // return result;
  
  if (num2 == 0 || num2 == 1) {
    return 1;
  }
  return num2 * fact2(num2 - 1);
}
console.log(fact2(num2));




