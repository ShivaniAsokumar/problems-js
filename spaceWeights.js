function spaceWeights(planetA, weight, planetB) {
	let planetObj = {
		Mercury: 3.7,
		Venus: 8.87,
		Earth: 9.81,
		Mars: 3.711,
		Jupiter: 24.79,
		Saturn: 10.44,
		Uranus: 8.69,
		Neptune: 11.15
	};

	let mass = weight / planetObj[planetA];

	let newWeight = mass * planetObj[planetB];

	return Number(newWeight.toFixed(2));
}

console.log(spaceWeights('Earth', 1, 'Mars'));
