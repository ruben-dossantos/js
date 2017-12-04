function highest(){
  return makeArray(arguments).sort(function(a,b){
    return b - a
  })
}

function makeArray(array){
  return Array().slice.call( array )
}

console.log(highest(1, 1, 2, 3)); // res: [ 3, 2, 1, 1 ]
console.log(highest(3, 1, 2, 3, 4, 5)); // res: [ 5, 4, 3, 3, 2, 1 ]
