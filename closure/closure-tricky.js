var a = 5; 
function runMe(a){ 
 console.log( a == 6); 
 
 function innerRun(){ 
   console.log( b == 7); 
   console.log( c == undefined); 
 } 
 
 var b = 7; 
 innerRun(); 
 var c = 8; 
} 
runMe(6); 
 
for ( var d = 0; d < 3; d++ ) { 
 setTimeout(function(){ 
   console.log( d == 3); 
 }, 100); 
}