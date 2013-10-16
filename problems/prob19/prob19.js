function key_with_max_val(hash) {
	var max = -Infinity;
	for(x in hash) {
    	if(hash[x] > max) {
    		max = hash[x];
    	}	
	}
	return max
}


var people = {"mike":27, "jack":22, "frank":16, "karl":19, "matt": 37}
document.write("The oldest person is " + (key_with_max_val(people)))
