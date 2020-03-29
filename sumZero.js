function sumZero(n) {
	const zeroArr = [];
	if (n === 1) {
		zeroArr.push(0);
		return zeroArr;
	}
	if (n % 2 === 0) {
		for (let i = -1 * (n / 2); i <= n / 2; i++) {
			if (i !== 0) {
				zeroArr.push(i);
			}
		}
	} else {
		for (let i = Math.floor(n / 2) * -1; i <= Math.floor(n / 2); i++) {
			zeroArr.push(i);
		}
	}
	return zeroArr;
}

function getAllElements(root1, root2) {
	let arr = [ ...root1, ...root2 ];
	return arr.sort((a, b) => a - b);
}

function lengthOfLastWord(str) {
	let length = 0;
	let trim = str.trim();
	for (let i = 0; i < str.length; i++) {
		if (trim.charAt(i) !== " ") {
			length++;
		} else {
			break;
		}
	}
	return length;
}

function arrayOfMultiples(n, length) {
	let nArr = [];
	for (let i = 0; i < length; i++) {
		nArr.push(n * (i + 1));
	}
	return nArr;
}

function rev(n) {
	if (n >= 0) {
		return parseInt(n.toString().split("").reverse().join(""));
	} else {
		return (-1 * parseInt(n.toString().split("").reverse().join(""))).toString();
	}
}

function calculator(num1, operator, num2) {
	if (operator === "+") {
		return num1 + num2;
	} else if (operator === "-") {
		return num1 - num2;
	} else if (operator === "/") {
		if (num2 === 0) {
			return "Can't divide by 0!";
		} else {
			return num1 / num2;
		}
	} else {
		return num1 * num2;
	}
} //You can also use the eval() method in js
