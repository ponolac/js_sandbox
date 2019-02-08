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
// window.location.reload();

// History Object
// window.history.go(-1);
// val = window.history.length; 

// Navigator Object
val = window.navigator;
val = window.navigator.cookieEnabled;
val = window.navigator.platform;
val = window.navigator.geolocation;

console.log(val);