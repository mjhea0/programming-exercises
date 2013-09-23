var createTriangle = function (num1,num2) {
	var line = "";
	var i = 0;
	while (i < num2) {
		line += "#";
		document.write(line + "<br/>")
		i++
	}
}

createTriangle(2,10)