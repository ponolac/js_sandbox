// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Harhar';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Harhar';

// Convert HTML collection into an array
lis = Array.from(lis);

lis.reverse(); // array method

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`; // displays reverse because of                                             .reverse array method in line 24
});

console.log(lis);