function letterCounter(arr, letter) {
	let count = 0;
	for (let row = 0; row < arr.length; row++) {
		for (let col = 0; col < arr[0].length; col++) {
			if (arr[row][col] === letter) {
				count++;
			}
		}
	}
	return count;
}
