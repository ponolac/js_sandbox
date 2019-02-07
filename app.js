// FOR LOOP

for(let i = 0; i <= 10; i++){
  if(i === 2){
    console.log('2 is best');
    continue;
  }

  if(i === 10){
    console.log('Stop the loop');
    break;
  }
  
  console.log('Number ' + i);
}