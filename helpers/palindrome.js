function checkPalindromeFast(text, i){
	return (i = i || 0 ) < 0 || i >= text.length >> 1 || text[i] === text[text.length - 1 - i] && checkPalindromeFast(text, ++i)
}

function checkPalindrome(text) {
	return text === text.split('').reverse().join('')
}

console.log(checkPalindrome("abba")) //true

console.log(checkPalindrome("apoa")) //false

console.log(checkPalindromeFast('racecar')) // true

console.log(checkPalindromeFast('Racecar'.toLowerCase())) // true

function checkPalindromeDumb(text){
	for(let i = 0; i < text.length / 2; i++){
		if(text[i] !== text[text.length - i - 1]){
			return false
		}
	}
	return true
}

console.log(checkPalindromeDumb("racecar")) // true

console.log(checkPalindromeDumb("apoa")) // false
