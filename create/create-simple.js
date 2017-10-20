const cat = {
  makeSound: function() {
    console.log(this.sound)
  }
}

const mark = Object.create(cat)
mark.sound = 'mewuuF'
mark.makeSound()

const waffles = Object.create(cat)
waffles.sound = 'mrrrrooooooowwww'
waffles.makeSound()

console.log('Is mark a cat?',
  cat.isPrototypeOf(mark))
