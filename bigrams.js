function canFind(bigrams, words) {
	return bigrams.every((letter) => words.some((word) => word.includes(letter)));
}
console.log(canFind([ 'at', 'be', 'th', 'au' ], [ 'beautiful', 'the', 'hat' ]));
console.log(canFind([ 'ay', 'be', 'ta', 'cu' ], [ 'maybe', 'beta', 'abet', 'course' ]));
