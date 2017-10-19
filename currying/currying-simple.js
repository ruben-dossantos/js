/*
let dragon = (name, size, element) => 
	name + ' is a ' +
	size + ' dragon that breathes ' + 
	element + '!'

console.log(dragon('fluffy', 'tiny', 'lightning'))
*/

let dragon = 
	name => 
		size => 
			element => 
				name + ' is a ' +
				size + ' dragon that breathes ' + 
				element + '!'

console.log(dragon('fluffy')('tiny')('lightning'))
// res: fluffy is a tiny dragon that breathes lightning!