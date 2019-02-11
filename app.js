// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hallo Wurld');

//   // e.preventDefault(); // method to prevent default behavior
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  
  // e.target.innerText = 'hello';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates of event relative to the window
  val = e.clientY;
  val = e.clientX;

    // Coordinates of event relative to the element
    val = e.offsetY;
    val = e.offsetX;

  console.log(val);
}