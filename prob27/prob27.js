function divide(n1,n2) {
	try {
		if (n2 == 0) {
			throw("Divide by zero error.");
		} else {
			return n1 / n2
		}
	} catch (e) {
		alert("Error: " + e)
	}
}

var num1 = 100;
var num2 = 0;
console.log(divide(num1, num2))

var num1 = 200
var num2 = 2
console.log(divide(num1, num2))

