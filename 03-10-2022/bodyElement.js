var firstElement = document.body.firstElementChild;
console.log(firstElement);
firstElement.style.color = "red";

var ol = document.body.firstElementChild.nextElementSibling;
console.log(ol);

var li = ol.getElementsByTagName("li");
console.log(li);

ol.innerHTML += "<li> Hello Dharam</li>";
console.log(li.length);

// color array;
color = ["red", "green", "blue", "orange", "black"];

for (let i = 0; i < li.length; i++) {
  li[i].style.color = color[i];
} 

var li = ol.querySelectorAll("li");
console.log(li);
//or
// all li selected from ui
let allLi = document.querySelectorAll("li");
console.log(allLi);

//list color change loop

let secondOl = document.querySelector(".second-ol");
console.log(secondOl);

secondOl.style.fontSize = "80px";
secondOl.style.fontWeight = "900";
secondOl.style.listStylePosition = "inside";
let secondOlLi = secondOl.getElementsByTagName("li");
let liLen = secondOlLi.length;
console.log("length of li = " + liLen);

let time = 0;
function changeColor(element) {
  let z = setTimeout(() => {
    secondOlLi[element].style.color = color[element];
    secondOlLi[element].style.transition = "all 0.3s";

    // console.log( secondOl.getElementsByTagName( "li" )[element] );
  }, time);
}

function blackColor() {
  for (let i = 0; i < liLen; i++) {
    secondOlLi[i].style.transition = "all 0.3s";
    secondOlLi[i].style.color = "black";
  }
}

setInterval(() => {
  for (let i = 0; i < liLen; i++) {
    changeColor(i);
    time += 300;
  }
  blackColor();
}, 300);


let thirdOl=document.getElementsByClassName('third-ol')[0];
console.log(thirdOl);
let thirdOlLiEVEN=thirdOl.querySelectorAll('li:nth-child(even)');
let thirdOlLiODD=thirdOl.querySelectorAll('li:nth-child(odd)');
console.log(thirdOlLiEVEN);
thirdOlLiEVEN[0].style.color="red";   