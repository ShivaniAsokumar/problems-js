/**
 * @param {string} s
 * @return {number}
 */
// function romanToInt(str) {
// 	const valuesMap = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000
// 	};

// 	let result = 0;

// 	switch (str) {
// 		case 'IV':
// 			result = 4;
// 			return result;
// 		case 'IX':
// 			result = 9;
// 			return result;
// 		case 'XL':
// 			result = 40;
// 			return result;
// 		case 'XC':
// 			result = 90;
// 			return result;
// 		case 'CD':
// 			result = 400;
// 			return result;
// 		case 'CM':
// 			result = 900;
// 			return result;
// 	}

// 	const romanArray = str.split('');
// 	// [X,X,V,I,I]
// 	let val = [];
// 	const romanValues = romanArray.map((romNumeral) => {
// 		return valuesMap[romNumeral];
// 	});

// 	result = romanValues.reduce((accum, currVal) => {
// 		return accum + currVal;
// 	});

// 	return result;
// }

function romanToInt(str) {
	const keys = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let result = [];
	for (let i = 0; i < str.length; i++) {
		if (keys[str[i]] < keys[str[i + 1]]) {
			result.push(keys[str[i + 1]] - keys[str[i]]);
			i++;
			//continue;
		} else {
			result.push(keys[str[i]]);
		}
	}

	const answer = result.reduce((accum, currVal) => accum + currVal);
	return answer;
}
//romanToInt('XXVII');
console.log(romanToInt('XXVII'));
console.log(romanToInt('VII'));
console.log(romanToInt('XXIV'));
console.log(romanToInt('IV'));
console.log(romanToInt('XC'));
console.log(romanToInt('MCMXCIV'));
