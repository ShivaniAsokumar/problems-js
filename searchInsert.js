function searchInsert(nums, target) {
	nums.push(target);

	const sortArr = nums.sort((a, b) => a - b);
	return sortArr.indexOf(target);
}

console.log(searchInsert([ 1, 3, 5, 6 ], 5));
console.log(searchInsert([ 1, 3, 5, 6 ], 2));
console.log(searchInsert([ 1, 3, 5, 6 ], 7));
console.log(searchInsert([ 1, 3, 5, 6 ], 0));
