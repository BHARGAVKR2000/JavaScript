const button = document.getElementById("clickme");
let yourName = 'ramesh';
getName();
function x(y){
    setTimeout(()=>{
        console.log("timer");
    },5000);
    console.log("x function");
    y();
}

function y(){
    console.log("y fuction");
}


function buttonEventListeners(){
    let count = 0;
    button.addEventListener("click",function(){
    console.log("button clicked",++count);
});
}

buttonEventListeners();

function getName(){
    console.log("Your name is: "+yourName);
}

function getName2(){
    console.log("your name");
}

getName2();