function rangeIntegers(x, y){
	if(y - x === 2){ return [ x + 1 ] }
	else {
		let list = rangeIntegers(x, y - 1)
		list.push(y - 1)
		return list
	}
}


console.log(rangeIntegers(10, 17))