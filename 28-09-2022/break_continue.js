// print the value of i
for ( let i = 1; i <= 5; i++ ) {
    // break condition     
    if ( i == 3 ) {
        break;
    }
    console.log( i );
}


// nested for loops

// first loop
for ( let i = 1; i <= 3; i++ ) {

    // second loop
    for ( let j = 1; j <= 3; j++ ) {
        if ( i == 2 ) {
            break;
        }
        console.log( `i = ${i}, j = ${j}` );
    }
}


// print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}