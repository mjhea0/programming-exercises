var rand_n = function(n) {
	list = [];
	for (var i = 1; i <= n; i++) {
		list.push(Math.floor((Math.random() * 100)));
	}
	return list;
}

var average = function(list) {
	average_value = 0;
	for (var i = 0; i < list.length; i++) {
		average_value += Number(list[i]);
	}
	return Math.round(average_value / list.length);
}

var variance = function(rand_list, average){
	variance_value = 0
	for (var i = 0; i < rand_list.length; i++) {
		variance_value += Number(Math.pow((list[i] - avg),2));
	}
	return variance_value / rand_list.length;
}

var standard_deviation = function(variance) {
	var std_dev = Math.sqrt(variance);
	return Math.round(std_dev);
}

rand_nums = rand_n(10)
document.write("The numbers are " + rand_nums)

avg = average(rand_nums)
document.write("<br/>The average is " + avg)

var_variable = variance(rand_nums,avg)
document.write("<br/>The variance is " + var_variable)

std_dev = standard_deviation(var_variable)
document.write("<br/>The standard dev is " + std_dev);

