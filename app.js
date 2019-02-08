// // FOR LOOP - when you know how many iterations it will have.

// for(let i = 0; i <= 10; i++){
//   if(i === 2){
//     console.log('2 is best');
//     continue;
//   }

//   if(i === 10){
//     console.log('Stop the loop');
//     break;
//   }
  
//   console.log('Number ' + i);
// }

// WHILE LOOP - when iterations are unclear.

// let i = 0; 

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE LOOP - will always run at least once no matter what.

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOPING THRU ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars[1];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOR EACH, LOOP THRU ARRAY

// cars.forEach(function(car, index, array){ // takes in an anonymous function 
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP METHOD - most commmonly used to return a different array 

// const users = [
//   {id:1, name:'John'},
//   {id:2, name:'Sara'},
//   {id:3, name:'Tom'},
//   {id:4, name:'Madeline'},
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP - often used for objects 

 // looping thru object example. using for in loop.

const user = {
  firstName: 'John',
  lastName: 'Johnson',
  age: 30
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}



