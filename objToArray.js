function objectToArray(obj) {
	let arr = Object.entries(obj);

	return arr;
}

console.log(
	objectToArray({
		D: 1,
		B: 2,
		C: 3
	})
);

console.log(
	objectToArray({
		likes: 2,
		dislikes: 3,
		followers: 10
	})
);

/**
 * What did I learn from this excercise?
 * How to use Object.entries(obj) when dealing with
 * the entries in an object. 
 */
