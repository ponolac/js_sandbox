// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // es5 way of defining defaults:
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS (puts a function as a variable assignment)

const square = function(x){
  return x*x;
};

// console.log(square(8));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFE's ( a function you declare & run at same time)

// (function(){
//   console.log('IIFE ran...');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Person'); 

// PROPERTY METHODS

// when a function is put inside of an object, it's called a method.

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();