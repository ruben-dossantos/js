function add(a, b) {
	return a + b;
}

console.log(add.call(this, 1, 2));
console.log(add.apply(this, [1, 2]));