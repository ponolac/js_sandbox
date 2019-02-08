// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT

// alert('Test'); // window.alert('Test');

// PROMPT - similar to alert but takes in input

// const input = prompt();
// alert(input);

// CONFIRM - used often when you're deleting something

// if(confirm('Are you sure')){
//   console.log('Yes');
// } else {
//   console.log('No');
// }

let val;

// // OUTER HEIGHT AND WIDTH
val = window.outerHeight;
val = window.outerWidth;

// OUTER HEIGHT AND WIDTH;
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY;
val = window.scrollX;

// LOCATION OBJECT - can be used to redirect and reload page.
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

 // Redirect
//  window.location.href = 'http://google.com';

 // Reload


// History Object
window.history.go();

console.log(val);