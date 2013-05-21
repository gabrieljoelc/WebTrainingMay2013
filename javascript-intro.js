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

function sub()
{
	var sum = arguments[0];
	// can't use for(var arg in arguments)
	for(var index = 1; index < arguments.length; index++)
	{
		sum -= arguments[index];
	}
	return sum;
}

function calc (methodName) {
	var arr = Array.prototype.slice.call(arguments, 1, arguments.length);
	// shouldn't use eval(). should be able to do something like
	// this[methodName], but doesn't work in node.js right now
	return eval(methodName).apply(this, arr);
}

console.log('calc(sum, 1, 3): ', calc('sum', 1, 3));
console.log('calc(sub, 4, 3): ', calc('sub', 4, 3, 1));

// gets "hoisted"
hoist1();
function hoist1() {console.log('hoist1');}

// doesn't get hoisted
hoist2();
var hoist2 = function () {console.log('hoist2');};