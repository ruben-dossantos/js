function add(a, b) {
	return a + b;
}

console.log(add.call(this, 1, 2)); // res: 3 
console.log(add.apply(this, [1, 2])); // res: 3