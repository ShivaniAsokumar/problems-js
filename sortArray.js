/**
 * Sorts the array in ascending order
 * @param {int[]} nums is an array of integers
 * @returns {int[]} a sorted array in ascending order
 */
function sortArray(nums) {
	nums.sort((a, b) => a - b);
	return nums;
}

console.log(sortArray([ 7, 2, 6, 0, 2, 5, 3, 9, 10 ]));
