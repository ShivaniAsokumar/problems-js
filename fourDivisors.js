function sumFourDivisors(nums) {
	let result = 0;
	for (let x of nums) {
		let count = 0;
		let divisors = [];
		let isContinue = false;
		if (isContinue) {
			continue;
		}
		for (let i = 1; i <= x; i++) {
			if (x % i === 0) {
				count++;
				divisors.push(i);
			}
			if (divisors.length > 4) {
				isContinue = true;
				break;
			}
		}

		if (count === 4) {
			const sum = divisors.reduce((accum, currVal) => {
				return accum + currVal;
			});
			result += sum;
		}
	}
	return result;
}

console.log(fourDivisors([ 3, 2 ]));
