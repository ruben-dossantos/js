String.prototype.repeatify = function(times){
  let str = '', i = 0

  for(i=0; i< times; i++){
    str += this
  }

  return str
}

console.log('Hello '.repeatify(3))
