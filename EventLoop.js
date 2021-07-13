const button = document.getElementById("clickme");

button.addEventListener("click",function (){
    console.log("Event handler");
    console.log("timer on");
    handle();
})



function handle(){
    let count = 0;
   setTimeout(function(){
       console.log("count value: "+count);
   },1000);
    setTimeout(function(){
        console.log("timer out");
    },4000);  
   
}

var calledfunc = function(nextfunc){
    console.log("inside called Function");
    nextfunc();
}

var callingfunc =  calledfunc(function(){
    console.log("calling function..");
})
