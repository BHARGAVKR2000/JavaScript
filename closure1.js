function test(){
    let variable = 5;
    setTimeout(function(){
        console.log(variable);
        
    },2000);
    console.log("loading please wait...")
}

test();