let val;

const today = new Date();
let birthday = new Date('9-10-1999 11:02:03');
birthday = new Date('September 10 1980');
birthday = new Date('9/10/80');

val = today.getMonth(); // zero-based!
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);

console.log(birthday);