let talk = function(){
	console.log(this.sound)
}
let boromir = {
	blabber: talk,
	sound: 'One does not simply walk into mordor!'
}
let gollum = {
	jabber: boromir.blabber,
	sound: 'My preciouussss...'
}

gollum.jabber() // res: My preciouussss...