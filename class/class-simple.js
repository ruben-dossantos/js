class Mammal {
  constructor(sound) {
    this.sound = sound
  }

  setSound(sound){
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

let mam = new Mammal("oink oink")
console.log(mam.talk())
mam.setSound("inhek inhek")
console.log(mam.talk())
mam.sound = "OLA"
console.log(mam.talk())


let fluffykins = new Dog()
console.log(fluffykins.sound) // res: wooffeliwofffffff
fluffykins.sound = 'meow' // NOT PRIVATE!
console.log(fluffykins.talk()) // res: meow
let x = Dog.prototype.talk.bind({
  sound: 'ROAR'
})()
console.log(x) // res: ROAR
console.log(Dog.prototype.isPrototypeOf(fluffykins)) // res: true
