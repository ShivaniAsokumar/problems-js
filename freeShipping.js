function freeShipping(order) {
	let sum = 0;

	for (let elem in order) {
		sum += order[elem];
	}

	let eligible = sum > 50 ? true : false;
	return eligible;
}



console.log(freeShipping({ Shampoo: 5.99, 'Rubber Ducks': 15.99 })); //false
console.log(freeShipping({ 'Flatscreen TV': 399.99 })); //true
console.log(freeShipping({ Monopoly: 11.99, 'Secret Hitler': 35.99, Bananagrams: 13.99 })); //true
