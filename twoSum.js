function twoSum(arr, target) {
    let indices = [];
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === target - arr[i]) {
                indices.push(i, j);
            }
        }
    }
    return indices;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));

