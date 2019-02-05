const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // modulo operator

// Math Object  
              /* Side note: an object has properties and methods.
                A property is like an attribute. A method is a function (inside an object). */
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // Round
val = Math.ceil(2.4); // specify if want to round up
val = Math.floor(2.8); // specify if want to round down
val = Math.sqrt(64); // square root
val = Math.abs(-3); // absolute
val = Math.pow(8, 2); // power of.
val = Math.min(2,5,9,3,4,-5);
val = Math.max(2,5,90,3,4,-5);
val = Math.random(); // random 

val = Math.floor(Math.random() * 20 + 1); // random integer rounded up 

console.log(val);