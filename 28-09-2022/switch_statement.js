//switch statement
let a = 3;

switch ( a ) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    case 3:
        a = 'three';
        break;

    case 4:
        a = 'four';
        break;
    default:
        a = 'not found';
        break;
}
console.log( `The value is ${a}` );