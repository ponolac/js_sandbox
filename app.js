// TEMPLATE LITERALS / template strings. ES6

const name = 'John';
const age = 23;
const job = 'Dev';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
          '<li>Name: ' + name + '</li>' +
          '<li>Age: ' + age + '</li>' +
          '<li>Job: ' + job + '</li>' +
          '<li>City: ' + city + '</li>';

document.body.innerHTML = html;