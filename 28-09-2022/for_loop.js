//display text 5 times
const n = 5;

// looping from i = 1 to 5
for ( let i = 1; i <= n; i++ ) {
    console.log( `I love JavaScript.` );
}

// infinite for loop
for ( let i = 1; i > 0; i++ ) {
    // block of code
}

//nested loop

var name = "ram";
var num = 2;
for ( var i = 0; i <= 5; i++ ) {
    for ( var j = i; j <= 5; j++ ) {
        if ( j == num && name === "ram" ){
            console.log( "matched" );
            break;
        }
    }
    break;
}
