const GUEST_LIST = {
	Randy: 'Germany',
	Karla: 'France',
	Wendy: 'Japan',
	Norman: 'England',
	Sam: 'Argentina'
};

console.log(GUEST_LIST['Randy']);

function greeting(name) {
	return GUEST_LIST[name] ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` : "Hi! I'm a guest.";
}
console.log(greeting('Randy'));
console.log(greeting('Bob'));
