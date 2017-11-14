function Person(saying){
  this.saying = saying
}

Person.prototype.talk = function(){
  console.log('I say: ', this.saying)
}

function spawn(constructor){
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  //var argsArray = Array.from(arguments) // ECMA 6
  var argsArray = Array.prototype.slice.apply(arguments) // ECMA 5
  constructor.apply(obj, argsArray.slice(1))
  return obj
}

var crockforg = spawn(Person, 'SEMICOLANS!!!1one1')
crockforg.talk() // res: I say:  SEMICOLANS!!!1one1
