function createTargetArray(nums, index) {
	let target = [];
	for (let i = 0; i < nums.length; i++) {
		let ind = index[i];
		let elem = nums[i];
		target.splice(ind, 0, elem);
	}
	return target;
}

console.log(createTargetArray([ 0, 1, 2, 3, 4 ], [ 0, 1, 2, 2, 1 ]));
