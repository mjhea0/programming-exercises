var createTriangleWhile = function (num1,num2) {
	var line = "";
	var i = 0;
	while (i < num2) {
		line += "#";
		document.write(line + "<br/>")
		i++
	}
}

var createTriangleFor = function (num1,num2) {
	var line = "";
	for (var i = 0; i < num2; i++) {
		line += "#";
		document.write(line + "<br/>")
	}
}

createTriangleWhile(2,10)
document.write("<br/>")
createTriangleFor(2,10)