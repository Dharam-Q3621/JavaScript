var totalImg = document.querySelectorAll( ".carousel__track>*" );
var totalDot = document.querySelectorAll( ".carousel__nav>*" );
var btn_left = document.querySelector( ".carousel__button--left" );
var btn_right = document.querySelector( ".carousel__button--right" );

btn_left.addEventListener( "click", left_click );
btn_right.addEventListener( "click", right_click );

let len = totalImg.length;
let click = len - 1;

function left_click() {
    if ( click > 0 ) {
        click--;
        carousel();
    }
}

function right_click() {
    if ( click < len - 1 ) {
        click++;
        carousel();
    }
}

for ( let i = 0; i < totalDot.length; i++ ) {
    totalDot[i].addEventListener( "click", function () {
        click = i;
        carousel();
    } );
}

function carousel() {
    for ( let i = 0; i < len; i++ ) {
        if ( i == click ) {
            totalImg[click].style.display = "block";
            totalDot[i].style.backgroundColor = "red";
        } else {
            totalImg[i].style.display = "none";
            totalDot[i].style.backgroundColor = "white";
        }
    }
}

setInterval(() => {
    carousel();
    console.log(click);
    click++;
    if(click==len){
        click=0;
    }
    
}, 2000);