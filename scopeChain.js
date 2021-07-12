function add() {
  let result = a + b; // a and b are accessable even inside the function
  display();
  function display() {
    // display is lexically inside add function
    console.log(result);
  }
}

console.log(a);

var a = 5;
let b = 5;

console.log(b);

add();
var a = "ramesh"; // var can be rediclared but let cannot
console.log(a);
 
if(true){
    var age = 30;
    let id = 373;
    console.log(id);
    console.log(age);
}

console.log("outside the block scope  age:"+age);

