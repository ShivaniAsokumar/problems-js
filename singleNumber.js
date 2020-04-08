function singleNumber(nums) {
	let singleNum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		while (i <= nums.length - 1)
			if (nums[i] === singleNum) {
				i++;
				singleNum = nums[i];
			}
	}
	return singleNum;
}

console.log(singleNumber([ 2, 2, 1 ]));
console.log(singleNumber([ 4, 1, 2, 1, 2 ]));
console.log(singleNumber([ 2, 1, 2, 3, 6, 6, 3 ]));
