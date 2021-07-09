function add(){
    let result = a + b;     // a and b are accessable even inside the function
    display();
    function display(){         // display is lexically inside add function
        console.log(result);
    }
}

let a = 5;
let b = 5;

add();