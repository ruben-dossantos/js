let talk = function(){
	console.log(this.sound)
}
let boromir = {
	speak: talk,
	sound: 'One does not simply walk into mordor!'
}

boromir.speak() // res: One does not simply walk into mordor!

let blabber = boromir.speak
blabber() // res: undefined