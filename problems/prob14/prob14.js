var calculatePower = function (num1, num2) {
	for (var i = 0; i < num2; i++) {
		(total *= num1);
	}
	return total;
}

// or -

// var calculatePower = function (num1, num2) {
// 	var i = 0;
// 	while (i < num2) {
// 		total *= num1;
// 		i++;
// 	}
// 	return total;
// }


total = 1
rand1 = Math.floor((Math.random() * 20))
rand2 = Math.floor((Math.random() * 20))
document.write("What is " + rand1.toString() + " to the " + rand2.toString() + " power?<br\>")
document.write("Answer: " + calculatePower(rand1, rand2))