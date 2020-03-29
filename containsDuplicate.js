function containsDuplicate(nums) {
	let valuesSoFar = [];
	for (let i = 0; i < nums.length; i++) {
		let values = nums[i];
		if (valuesSoFar.indexOf(values) !== -1) {
			return true;
		}
		valuesSoFar.push(values);
	}
	return false;
}
