//import fs from 'fs'
const fs = require('fs')

var output = fs.readFileSync('data.txt', 'utf-8')
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((customers, line) => {
	customers[line[0]] = customers[line[0]] || []
	customers[line[0]].push({
		name: line[1],
		price: line[2],
		quantity: line[3]
	})
	return customers
}, {})


console.log('output', JSON.stringify(output, null, 2))

/* res:
	output {
	  "mark johansson": [
	    { "name": "waffle iron", "price": "80", "quantity": "2" },
	    { "name": "blender", "price": "200", "quantity": "1" },
	    { "name": "knife", "price": "10", "quantity": "4" }
	  ],
	  "Nikita Smith": [
	    { "name": "waffle iron", "price": "80", "quantity": "1" },
	    { "name": "knife", "price": "10", "quantity": "2" },
	    { "name": "pot", "price": "20", "quantity": "3" }
	  ]
	}
*/