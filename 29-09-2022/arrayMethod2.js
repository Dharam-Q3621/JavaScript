arr = [22, 55, 11, 33, 88, 66, 77, 12, 1, 5];


//arrow function
const mapMethod = arr.map( ( value ) => { return value > 30 } );
console.log( mapMethod );

//anonymous function
const mapMethod2 = arr.map( function( value ){ return value > 30 } );
// console.log( mapMethod2 );

// function with name
let mapMethod3= arr.map(myFun);

function myFun(value) {  
return value>30;
}
// console.log(mapMethod3);

// filtered value
let filterMethod1=arr.filter((value)=>{return value>25})
console.log(filterMethod1);

//shorted value
filterMethod1.sort((a,b)=>{return a-b})

// print every value
filterMethod1.forEach((element) => {
    console.log("filter value:- "+element);
});


