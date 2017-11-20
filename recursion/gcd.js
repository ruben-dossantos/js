function gcd(x, y) {
	if(!y) return x
	return gcd(y, x % y)
}

console.log(gcd(10,9))