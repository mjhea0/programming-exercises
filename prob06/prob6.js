var rand_print = function (rand_num){
	var greaterThan = []
	var lessThan = []
	if (rand_num > 40) {
		for (var i = 40; i <= rand_num; i++) {
			if (i % 2 !== 0){
				greaterThan.push(i)
			}
		}
		return greaterThan.reverse()
	} else {
		for (var i = rand_num; i < 40; i++) {
			if (i % 2 !== 0) {
				lessThan.push(i)
			}
		}
		return lessThan.reverse()
	}
}

var rand_num = (Math.floor((Math.random() * 100)))
document.write("The number is " + rand_num + "<br/>")
document.write(rand_print(rand_num))