const firstName = 'William';
const lastName = 'Johnson';
const age = 22;
const str = 'Hullo derr my name is Test';
const tags = 'web dev,programming,testing';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Buddy ';
val += 'Holland';  // += to append

val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.';

// Escaping
val = 'That\'s great, I can\'t wait';




//   PROPERTIES & METHODS AVAILABLE WITH STRINGS

// length property
val = firstName.length;

// concat() method
val = firstName.concat(' ', lastName);

// change case method
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[5]; // can treat strings like read-only arrays

// indexOf() method
val = firstName.indexOf('l');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('5');

// get last char formula
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Jack', 'Test');

// includes()
val = str.includes('Hullo');

console.log(val);