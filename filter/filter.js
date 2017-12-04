var animals = [
	{ name: 'Fluffy', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'cat' },
	{ name: 'Jimmy', species: 'fish' },
	{ name: 'Vinny', species: 'dog' }
]
/*
var isDog = function(animal){
	return animal.species === 'dog'
}
*/
let isDog = animal => animal.species === 'dog'

var dogs = animals.filter(isDog)

console.log(dogs)
/* res:
	[
		{ name: 'Caro', species: 'dog' },
  		{ name: 'Hamilton', species: 'dog' },
  		{ name: 'Vinny', species: 'dog' }
  	]
*/
