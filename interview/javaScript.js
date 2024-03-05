"use strict";//To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code

// Hoisted variable
hoistedVariable=3;
console.log(hoistedVariable)// outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

//Syntax of IIFE :

(function(){ 
  // Do something;
})();
//cookie
document.cookie = "key1 = value1; key2 = value2; expires = date";
//arrow function
const hello=()=>{
    console.log("hi everyone")
}