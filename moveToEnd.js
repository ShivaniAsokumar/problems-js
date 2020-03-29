function moveToEnd(arr, el) {
	for (let elem of arr) {
		if (elem === el) {
			let add = arr.splice(arr.indexOf(elem), 1);

			arr.push(add[0]);
		}
	}
	return arr;
}

console.log(moveToEnd([ 1, 3, 2, 4, 4, 1 ], 1));
console.log(moveToEnd([ 7, 8, 9, 1, 2, 3, 4 ], 9));
console.log(moveToEnd([ 'a', 'a', 'a', 'b' ], 'a'));
