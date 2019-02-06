// Function declarations

function greet(firstName = 'John', lastName = 'Doe'){
  // es5 way of defining defaults:
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());