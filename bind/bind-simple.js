let dog = {
	sound: 'woof',
	talk: function() {
		console.log(this.sound)
	}
}

dog.talk() // res: woof
let talkFunction = dog.talk
talkFunction() // res: undefined

let boundFunction = talkFunction.bind(dog)
boundFunction() // res: woof