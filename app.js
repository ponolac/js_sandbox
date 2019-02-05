// TYPE CONVERSION -- taking a variable and changing the data type.

let val;

// Converting number to string
val = String(5); // wrap in String function
val = String(4+4);

// Converting boolean to string
val = String(true);

// Converting date to string
val = String(new Date());

// Converting array to string
val = String([1,2,3,4]);

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // .length property only works on strings