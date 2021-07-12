function test(){
    let variable = 5;
    setTimeout(function(){
        console.log(variable);     // here the variable is closures and the function is a call back function
    });
    console.log("loading please wait...")
}

test();

/************************************************************************** */
function buttonCount(){
    var counter = 0;
    return function addCount(){
        ++counter;      // here addCount keep track of counter of its parent even though  it is destroyed after the functio is executed;       
        return counter;
    }
}

var count = buttonCount();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
/******************************************************************************* */
console.log("executing the task");
function task(){
    for(let i = 1; i< 6; ++i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

task();

/******************************************************************************* */

function counter(){
    var count = 0;
    return function addCounter(){
        ++count;
         console.log("counter: "+count);
    }
}

let c = counter();
c();
/******************************************************************************* */