const cat = {
  init: function(sound){
    this.sound = sound
    return this
  },
  makeSound: function() {
    console.log(this.sound)
  }
}

function objectCreate(proto){
  var obj = {}
  Object.setPrototypeOf(obj, proto)
  return obj
}

const mark = objectCreate(cat).init('mewuuF')
mark.makeSound()

const waffles = objectCreate(cat).init('mrrrrooooooowwww')
waffles.makeSound()

console.log('Is mark a cat?',
  cat.isPrototypeOf(mark))
