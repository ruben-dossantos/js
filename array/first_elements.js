function firstElements(array, n){
	if(!n) return array[0]
	else return array.slice(0, n)
}

console.log(firstElements([6,5,4,3]))
console.log(firstElements([6,5,4,3],3))