function uniqueSort(arr) {
	let newArray = [];
	for (let i of arr) {
		if (!newArray.includes(i)) {
			newArray.push(i);
		}
	}
	return newArray.sort((a, b) => a - b);
}

console.log(uniqueSort([ 1, 2, 4, 3 ]));
console.log(uniqueSort([ 1, 4, 4, 4, 4, 4, 3, 2, 1, 2 ]));
console.log(uniqueSort([ 6, 7, 3, 2, 1 ]));
console.log(uniqueSort([ 0, 0, 0, 0 ]));
console.log(uniqueSort([ -1, -3, 0, 5, -100 ]));
