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

// get single value
val = numbers[3];
val = numbers[0];

// insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// numbers.push(250); // add to the end of array
// numbers.unshift(120); // add to front of array
// numbers.pop(); // take off from end
// numbers.shift(); // take off from front
// numbers.splice(1,3); // splice values
// numbers.reverse(); // reverse

// Concatenate Array
val = numbers.concat(numbers2);

// Sorting an array
val = fruit.sort();
val = numbers.sort(); // see next line

// use the compare function to sort numbers in numerical order
val = numbers.sort(function(x, y){
  return x - y;
}); 

// reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find() method   (takes in a testing function)
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);