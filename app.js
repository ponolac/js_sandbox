const firstName = 'William';
const lastName = 'Johnson';
const age = 22;

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

console.log(val);