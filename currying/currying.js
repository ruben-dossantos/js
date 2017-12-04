const lod = require('lodash')
//import _ from 'lodash'

let dragons = [
	{ name: 'fluffy', element: 'lightning' },
	{ name: 'noomi', element: 'lightning' },
	{ name: 'karo', element: 'fire' },
	{ name: 'doomer', element: 'timewarp' }
]

let hasElement = lod.curry((element, obj) => obj.element === element )

let lightningDragons = dragons.filter(hasElement('lightning'))

console.log(lightningDragons)
/* res:
	[
		{ name: 'fluffy', element: 'lightning' },
		{ name: 'noomi', element: 'lightning' }
	]
*/
