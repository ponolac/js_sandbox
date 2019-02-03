// // var, let, const

// var name = 'John Doe'; // declared a variable
// console.log(name); // logs it into console

// // can reassign a var value with var or let, but not const.

// name = "Jim Unknown";
// console.log(name);

// // init var

// var greeting; // undefined
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // var's can only include: letters, numbers, _, $
// // cannot start with a number


// LET
// let name = 'John Doe'; 
// console.log(name); 
// name = "Jim Unknown";
// console.log(name);

// CONST -- always constant, cannot change.
// const name1 = "Jim";
// console.log(name1);
// CONST must have value.

// PRIMITIVE TYPES

// String
const name = 'Jim Doe';

// Number
const age = 50;

// Boolean
const hasCar = false;

// Null
const car = null; // returns an object

// Undefined
let test;

// Symbol -> new for ES6
const sym = Symbol();
console.log(typeof sym);