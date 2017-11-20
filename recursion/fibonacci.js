function fibonacci(n) {
	if( n === 1 ){ return [0 , 1] }
	else {
		let list = fibonacci(n - 1)
		list.push( list[list.length - 1] + list[list.length - 2] )
		return list

	}
}

console.log(fibonacci(10))