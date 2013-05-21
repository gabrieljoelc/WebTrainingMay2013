var p1 = {
	firstname: 'someone',
	lastname: 'cool',
	fullname: function() {
		return this.firstname + ' ' + this.lastname;
	}
};
var p2 = {
	firstname: 'someone else',
	lastname: 'cooler'
};

function fullname(obj) {
	return obj.firstname + ' ' + obj.lastname;
}

console.log('p1.fullname(): ' + p1.fullname());
console.log('fullname(p2): ' + fullname(p2));


function sum () {
	var sum = 0;
	// can't use for(var arg in arguments)
	for(var index = 0; index < arguments.length; index++)
	{
		sum += arguments[index];
	}
	return sum;
}

console.log('sum(10,10,10): ' + sum(10,10,10));
console.log('sum(2,2,2,2,2,2): ' + sum(2,2,2,2,2,2));

function add(a, b) {
	return a + b;
}

function sub(a, b)
{
	return a - b;
}

function calc (fn, a, b) {
	return fn.call(this, a, b)
}


console.log('calc(add, 1, 3): ', calc(add, 1, 3));
console.log('calc(sub, 4, 3): ', calc(sub, 4, 3));