function lengthOfLastWord(str) {
	if (str.length === 1) {
		return 1;
	}
	let arr = str.split('');
	arr = arr.reverse();
	let reverseStr = arr.join('');

	let substring = reverseStr.substring(0, reverseStr.indexOf(' '));
	return substring.length;
}

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord(' a'));
console.log(lengthOfLastWord('a'));
