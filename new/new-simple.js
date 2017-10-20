function Person(saying){
  this.saying = saying
}

Person.prototype.talk = function(){
  console.log('I say: ', this.saying)
}

var crockforg = new Person('SEMICOLANS!!!1one1')
crockforg.talk() // res: I say:  SEMICOLANS!!!1one1
