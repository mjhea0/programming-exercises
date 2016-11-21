var calculatePower = function (num1, num2) {
	var total = 1;
	for (var i = 0; i < num2; i++) {
		total *= num1;
	}
	return total;
};

// or -

// var calculatePower = function (num1, num2) {
// 	var i = 0;
// 	while (i < num2) {
// 		total *= num1;
// 		i++;
// 	}
// 	return total;
// }


var rand1 = Math.floor((Math.random() * 20));
var rand2 = Math.floor((Math.random() * 20));
console.log("What is " + rand1.toString() + " to the " + rand2.toString() + " power?");
console.log("Answer: " + calculatePower(rand1, rand2));
