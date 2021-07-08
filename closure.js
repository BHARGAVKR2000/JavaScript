var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
alert(add());
/**************************************Example 2*********************************************************** */
const myName = "sam";

function printName() {
  console.log(myName); // myName is accessable inside the function which is normally not possible in other languages
}

printName();
/**************************************Example 3*********************************************************** */

function outerFunction(outer){
    let name = 'ramesh';
    return function innerFunction(innner){
        console.log("outerFunciton value: "+outer);
        console.log("innerFunciton value: "+innner);
        console.log("outerFunciton name: "+name);  // the inner function has the access to outerFuction variables and scope
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

/**************************************Example 4*********************************************************** */

const f = () => {
    let counter = 0;
    return  () => {
        counter += 1;
        return counter;
    };
}

f();
console.log("counter value: "+f());