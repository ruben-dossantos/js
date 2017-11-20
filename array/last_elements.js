function lastElements(array, n){
	if(!n) return array[array.length - 1]
	else return array.slice(Math.max(array.length - n, 0))
}

console.log(lastElements([6,5,4,3]))
console.log(lastElements([6,5,4,3],3))