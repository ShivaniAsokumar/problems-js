Array.prototype.myMap = function(func) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(func(this[i], i, this));
	}
	return result;
};

const arr = [ 2, 3, 4 ];
const map = arr.myMap((x) => {
	return x * 2;
});

Array.prototype.myReduce = function(callback, initialValue) {
	let accum;
	if (!initialValue) {
		accum = this[0];
	} else {
		accum = initialValue;
	}

	for (let i = initialValue ? 0 : 1; i < this.length; i++) {
		accum = callback(accum, this[i], i, this);
	}
	return accum;
};

function addVal(acc, element) {
	return acc + element * 2;
}
const reduce = arr.myReduce(addVal);

const num = [ 1, 2, 3, 4 ];
Array.prototype.myEvery = function(callback) {
	for (let i = 0; i < this.length; i++) {
		if (!callback(this[i], i, this)) {
			return false;
		}
	}
	return true;
};

Array.prototype.myFilter = function(callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			result.push(this[i]);
		}
	}
	return result;
};

let sample = [ 6, 1, 2, 5, 9, 10 ];
