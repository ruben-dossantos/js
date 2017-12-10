function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments)
  return args.indexOf(2) != -1
}

console.log(isTwoPassed(1,4))
console.log(isTwoPassed(1,2,3,4,5))
