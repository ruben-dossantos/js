function Ninja(){} 
 
Ninja.prototype.swingSword = function(){ 
  return true; 
}; 
 
var ninjaA = Ninja(); 
console.log(ninjaA);
 
var ninjaB = new Ninja(); 
console.log(ninjaB.swingSword());