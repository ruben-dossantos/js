function yell(n){
	return n > 0 ? yell(n - 1) + 'a' : 'hiy';
}

console.log(yell(4)); // res: hiyaaaa