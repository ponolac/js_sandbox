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
          '<li>City: ' + city + '</li>' +
          '</ul>';

function hello(){
  return 'hello';
}

// With template literals / template strings (es6)

html = `
  <ul>
    <li>Name: ${name}</li> 
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;