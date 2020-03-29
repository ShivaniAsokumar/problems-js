function plusOne(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (++digits[i] > 9) {
			digits[i] = 0;
		} else {
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
}

console.log(plusOne([ 9 ]));
console.log(plusOne([ 1, 2, 9 ]));
console.log(plusOne([ 9, 9 ]));
console.log(plusOne([ 1, 2, 3 ]));
console.log(plusOne([ 4, 3, 2, 1 ]));
console.log(plusOne([ 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3 ]));
console.log(plusOne([ 5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2, 5, 8, 9 ]));
