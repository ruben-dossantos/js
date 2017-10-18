const fs = require('fs')
const highland = require('highland')

highland(fs.createReadStream('customers.csv', 'utf8'))
	.split() //split by line
	.map(line => line.split(',')) //split line by comma
	.map(parts => ({
		name: parts[0],
		numPurchases: parts[1]
	})) // transform into object
	.filter(customer => customer.numPurchases > 2) //hide bad customers
	.map(customer => customer.name) //show only the name
	.each( x => console.log('each: ', x))
