let marks = {
    ram: 33,
    rahul: 44,
    amit: 88,
    rohan: 53
};

for ( let i = 0; i < Object.keys( marks ).length; i++ ) {
    // console.log(Object.keys(marks)[i]);
    console.log( "Marks of " + Object.keys( marks )[i] + " = " + marks[Object.keys( marks )[i]] );
}

///------------------------//
console.log( "----------------------------------------" );

for ( const key in marks ) {
    console.log( "The Marks of " + key + " = " + marks[key] );
}

