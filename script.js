/**************************************Ternary Operator******************************************** */
console.log("teranary operator");
let a = 5;
let b = 6;             
(a > b)? console.log(a+" is greater"): console.log(b+" is greater");
console.log("*******************")
/**************************************(Nullish Operator ??)******************************************** */
let user;
let myName = 'ramesh';
console.log(myName ?? "name not initialized");
console.log(user ?? "not Defined");
console.log("******************");
/**********************************************Call Back Functions********************************************** */
//console.log(confirm("dog is an animal do you agree?"));

function ask(question, aggreed, notaggreed){
    if(confirm(question)){
        aggreed()
    }
    else{
        notaggreed()
    }
}

function showOk(){
    console.log("i know yor are a human");
}

function showCancel(){
    console.log("Don't tell me lies baka...");
}

ask("are you human?",showOk,showCancel);
/*******************************************Call Back Function*********************************************************** */

setTimeout(function (){
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();       // y is a call back fuction
}

x(function y(){
    console.log("y");
})
/****************************************************************************************************** */