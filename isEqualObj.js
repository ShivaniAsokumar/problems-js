function isEqual(objOne, objTwo) {
	return objOne.name === objTwo.name && objOne.phone === objTwo.phone && objOne.email === objTwo.email;
}

let objOne = {
	name: 'Jason',
	phone: '9853759720',
	email: 'jason@edabit.com'
};

let objTwo = {
	name: 'Jason',
	phone: '9853759720',
	email: 'jason@edabit.com'
};

console.log(isEqual(objOne, objTwo));
