var rand_print = function (rand_num){
	var array = []
	for (var i = 0; i <= rand_num; i++) {
		if (i % 2 === 0){
			array.push(i)
		}
	}
	return array;
}

var rand_num = (Math.floor((Math.random() * 100)))
document.write("The number is " + rand_num + "<br/>")
document.write(rand_print(rand_num))

