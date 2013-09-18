var standard_deviation = function(x,y,average) {
	var num1 = Math.pow((x - avg),2);
	var num2 = Math.pow((y - avg),2);
	var variance = (num1 + num2);
	document.write("The variance is " + variance + "<br/>");
	var std_dev = Math.sqrt((num1 + num2) / 2);
	document.write("The standard dev is " + std_dev + ".");
}

var num1 = Math.floor((Math.random() * (100)));
var num2 = Math.floor((Math.random() * (100))); 

document.write("The numbers are " + num1 + " and " + num2 + ".<br/>")

var avg = (num1 + num2) / 2;
document.write("The average is " + avg + ".<br/>");

standard_deviation(num1, num2, avg)
