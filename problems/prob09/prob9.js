rand_nums = []

var generate_random = function (num){
	for (var i = 0; i <= num; i++) {
		rand_nums.push(Math.floor((Math.random() * 100)));
	}
	document.write(rand_nums.sort() + "<br/>")
}

generate_random(10)
rand_nums = []
generate_random(20)
rand_nums = []
generate_random(5)