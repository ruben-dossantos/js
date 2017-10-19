const lod = require('lodash')
//import _ from 'lodash'

let dragon = (name, size, element) => 
	name + ' is a ' +
	size + ' dragon that breathes ' + 
	element + '!'

dragon = lod.curry(dragon)


console.log(dragon('fluffy')('tiny')('lightning'))
// res: fluffy is a tiny dragon that breathes lightning!