function isHappy(num) {
	let arr = (num + '').split('');
	let sumSquare = 0;
	for (let n of arr) {
		sumSquare += n * n;
	}
	arr = (sumSquare + '').split('');
}

isHappy(19);
