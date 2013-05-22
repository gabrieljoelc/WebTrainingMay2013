

function crazyCalc (a, b, c) {
	var r, l, operator;

	for (var index = 0; index < 3; index++) {
		if (l === undefined && !isNaN(arguments[index])) {
			l = parseInt(arguments[index]);
		}
		else if (r === undefined && !isNaN(arguments[index])) {
			r = parseInt(arguments[index]);
		}
		else if (isNaN(arguments[index])) {
			switch(arguments[index]) {
				case '-':
					operator = function (r1, l1) {return r1 - l1;}
					break;
				default:
					operator = function (r1, l1) {return r1 + l1;}
					break;
			}
		}
	}

	console.log(r);
	console.log(l);
	console.log(operator);

	return operator(r, l);
}

console.log('crazyCalc(+,1,2): ' + crazyCalc('+', '1', 2));
console.log('crazyCalc(5,+,5): ' + crazyCalc(5, '+', 5));