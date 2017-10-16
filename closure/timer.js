var count = 0; 
 
var timer = setInterval(function(){ 
  if ( count < 5 ) { 
    console.log( "Timer call: ", count ); 
    count++; 
  } else {
    clearInterval( timer ); 
  } 
}, 1000);