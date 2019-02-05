// TYPE CONVERSION -- taking a variable and changing the data type.

let val;

// Converting number to string
// One option is to wrap in string function

val = String(5); 
val = String(4+4);

// Converting boolean to string
val = String(true);

// Converting date to string
val = String(new Date());

// Converting array to string
val = String([1,2,3,4]);

// Another option is the toString() method
val = (5).toString();
val = (false).toString();
val = (new Date()).toString();
val = (5*5).toString();
val = ([1,2,3,4]).toString();

// Converting strings to numbers
// One option is the number function

val = Number('5'); // returns 5
val = Number(true); // returns 1
val = Number(null); // returns null
val = Number('hello'); // returns NaN

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // .length property only works on strings
console.log(val.toFixed()); // toFixed method only works on numbers and allows you to specify decimals.