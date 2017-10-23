class Mammal {
  constructor(sound) {
    this.sound = sound
  }

  talk() {
    return this.sound
  }
}

class Dog extends Mammal {
  constructor(){
    super('wooffeliwofffffff')
  }
}

let fluffykins = new Dog()
console.log(fluffykins.sound) // res: wooffeliwofffffff
fluffykins.sound = 'meow' // NOT PRIVATE!
console.log(fluffykins.talk()) // res: meow
let x = Dog.prototype.talk.bind({
  sound: 'ROAR'
})()
console.log(x) // res: ROAR
console.log(Dog.prototype.isPrototypeOf(fluffykins)) // res: true
