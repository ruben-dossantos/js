function smallest(array){
	return Math.min.apply(Math, array);
}
function largest(array){
	return Math.max.apply(Math, array);
}

console.log(smallest([1, 2, 3, 4])); 	// res: 1
console.log(largest([1, 2, 3, 4])); 	// res: 4