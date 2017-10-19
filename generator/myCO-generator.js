const fetch = require('node-fetch')

run(function *(){
	const uri = 'http://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	const post = yield response.json()
	const title = post.title
	console.log('Title: ', title)
})

function run(generator) {
	const iterator = generator()
	const iteration = iterator.next()
	const promise = iteration.value
	promise.then( response => {
		const anotherIteration = iterator.next(response)
		const anotherPromise = anotherIteration.value
		anotherPromise.then( post => iterator.next(post))
	})
}