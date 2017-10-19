let talk = function(){
	console.log(this.sound)
}
let boromir = {
	sound: 'One does not simply walk into mordor!'
}
boromir.speak = talk.bind(boromir)
boromir.speak() // res: One does not simply walk into mordor!

let blabber = boromir.speak
blabber() // res: One does not simply walk into mordor!
