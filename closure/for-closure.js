var count = 0;
for ( var i = 0; i < 4; i++ ) (function(i){
  setTimeout(function(){
    console.log( i === count++);
  }, i * 200);
})(i);

let secondCount = 0
for(let i = 0; i < 4; i++){
  setTimeout(function(){ console.log("->", i === secondCount++ )}, i * 200)
}
