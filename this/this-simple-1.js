function talk(){
	console.log(this.sound)
}
let boromir = {
	sound: 'One does not simply walk into mordor!'
}
let talkBoundToBoromir = talk.bind(boromir)

talkBoundToBoromir() // res: One does not simply walk into mordor!
talk() // res: undefined