function findOccurrences(str, char) {
	let lString = str.toLowerCase();
	let lChar = char.toLowerCase();
	let wordsArray = lString.split(' ');
	let strObj = {};

	wordsArray.forEach((word) => {
		let count = 0;
		for (let i of word) {
			if (i === lChar) {
				count++;
			}
			strObj[`${word}`] = count;
		}
	});
	return strObj;
}

console.log(findOccurrences('Hello World', 'o'));
console.log(findOccurrences('Create a nice JUICY function', 'c'));
console.log(findOccurrences('An APPLE a day keeps an Archeologist AWAY...', 'A'));
