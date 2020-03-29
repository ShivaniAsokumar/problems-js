function puzzlePieces(a1, a2) {
	if (a1.length !== a2.length) {
		return false;
	}
	let compare = a1[0] + a2[0];
	let equalCount = 0;
	for (let i = 0; i < a1.length; i++) {
		if (a1[i] + a2[i] === compare) {
			equalCount++;
		}
	}
	if (equalCount === a1.length) {
		return true;
	} else {
		return false;
	}
}

console.log(puzzlePieces([ 1, 8, 5, 0, -1, 7 ], [ 0, -7, -4, 1, 2, -6 ]));
console.log(puzzlePieces([ 1, 2 ], [ -1, -1 ]));
console.log(puzzlePieces([ 9, 8, 7 ], [ 7, 8, 9, 10 ]));
