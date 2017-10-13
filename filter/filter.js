var animals = [
	{ name: 'Fluffy', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'cat' },
	{ name: 'Jimmy', species: 'fish' },
	{ name: 'Vinny', species: 'dog' }
]

var isDog = function(animal){
	return animal.species === 'dog'
}

var dogs = animals.filter(isDog)

console.log(dogs)