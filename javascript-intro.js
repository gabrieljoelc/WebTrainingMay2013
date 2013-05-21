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