function factorial(num) {
	total = 1;
	for (var i = 1; i <= num; i++) {
		total *= i;
	}
	return total
}

var rand_num = (Math.floor((Math.random() * 10)))
document.write("The factorial of " + rand_num + " is " + factorial(rand_num))