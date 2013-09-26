function TimeConvert(num) {
	hours = Math.floor(num / 60);
	minutes = num % 60;
	return hours + ":" + minutes;
}

document.write(TimeConvert(63) + "<br>")
document.write(TimeConvert(126) + "<br>")

