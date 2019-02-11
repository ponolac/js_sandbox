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

console.log(newHeading);