var animals = [
	{ name: 'Fluffy', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'cat' },
	{ name: 'Jimmy', species: 'fish' },
	{ name: 'Vinny', species: 'dog' }
]


/*var names = animals.map(function(animal){
	return animal.name
})*/

var names = animals.map((x) => x.name)


/*
var names = []
for(var i = 0; i < animals.length; i++){
	names.push(animals[i].name)
}*/

console.log(names) // res: [ 'Fluffy', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy', 'Vinny' ]
