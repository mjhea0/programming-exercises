var rand_print = function (rand_num){
	for (var i = 0; i <= rand_num; i++) {
		if (i % 2 == 0){
			document.write(i + ", ")
		}
	}
}

var rand_num = (Math.floor((Math.random() * 100)))
document.write("The number is " + rand_num + "<br/>")
rand_print(rand_num)

