// REPLACE AN ELEMENT

// Create element
const newHeading = document.createElement('h2');

// Can add an ID
newHeading.id = 'task-title';

// Add new text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Need a Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item 
lis[0].remove(); // call the remove method

// Remove child element
list.removeChild(lis[3]);