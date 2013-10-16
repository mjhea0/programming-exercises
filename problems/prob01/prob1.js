var variance = function(x,y,avg) {
	var num1 = Math.pow((x - avg),2);
	var num2 = Math.pow((y - avg),2);
	return num1 + num2;
}

var standard_deviation = function(x) {
	return Math.sqrt(x);
}


var num1 = Math.floor((Math.random() * (100)));
var num2 = Math.floor((Math.random() * (100))); 
document.write("The numbers are " + num1 + " and " + num2 + ".<br/>")

var avg = (num1 + num2) / 2;
document.write("The average is " + avg + "<br/>");

variance = variance(num1,num2,avg)
document.write("The variance is " + variance + "<br/>");

std_dev = standard_deviation(variance)
document.write("The standard dev is " + std_dev);

