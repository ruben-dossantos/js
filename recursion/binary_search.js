Array.prototype.binarySearch = function(value){
	let half = parseInt(this.length / 2)
	if(value === this[half]) return half
	if(value > this[half]) return half + this.slice(half, this.length).binarySearch(value)
	else return this.slice(0, half).binarySearch(value)
}

list = [0, 1, 2, 3, 4, 5, 6, 7]

console.log(list.binarySearch(4))