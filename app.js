// Some ways to create arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,54,67,43,84); // array constructor using array object
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

console.log(numbers);
console.log(val);