function Ninja(){
  var slices = 0;

  this.getSlices = function(){
    return slices;
  };
  this.slice = function(){
    slices++;
  };
}

var ninja = new Ninja();
ninja.slice();
console.log(ninja.getSlices() === 1);
console.log(ninja.slices === undefined);
