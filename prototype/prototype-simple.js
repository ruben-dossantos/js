function talk(){
	console.log(this)
	console.log(this.sound)
}
let animal = {
	talk
}
let dog = {
	sound: 'woof!'
}
let prarieDog = {
	howl: function(){
		console.log(this.sound.toUpperCase())
	}
}
Object.setPrototypeOf(dog, animal)
dog.talk() // res: 'woof!'
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl() // res: 'WOOF!'