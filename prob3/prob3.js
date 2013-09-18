var rand_n = function(n) {
	list = [];
	for (var i = 1; i <= n; i++) {
		list.push(Math.floor((Math.random() * 100)));
	}
	return list;
}

var max_n = function(list) {
	return Math.max.apply(Math, list)
}

var min_n = function(list) {
	return Math.min.apply(Math, list)
}

rand_nums = rand_n(20)
document.write("The numbers are " + rand_nums)

max_num = max_n(rand_nums)
document.write("<br/>The max number is " + max_num)

min_num = min_n(rand_nums)
document.write("<br/>The min number is " + min_num)
