// TYPE CONVERSION
// taking a variable and changing the data type


// Converting number to string

let val;

val = String(5); // wrap in String function
val = String(4+4);

// Converting boolean to string
val = String(true);

// Converting date to string
val = String(new Date());

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // .length property only works on strings

