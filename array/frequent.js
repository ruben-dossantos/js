function frequent(array){
	let mostFreq = 1
	let count = 0
	let item
	for(let i = 0; i<array.length; i++ ){
		for(let j = i; j<array.length; j++){
			if(array[i] === array[j]) count++
			if(mostFreq < count){
				mostFreq = count
				item = array[i]
			} 
		}	
		count = 0	
	}
	return item
}

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))