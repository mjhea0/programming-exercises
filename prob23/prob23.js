function longest_word(str) {
	array = str.split(" ");
	max = "";
	for (i=0; i < array.length; i++) {
    	if(array[i].length > max.length) {
    		max = array[i];
    	}	
	}
	return max;
}

var string = "I amdfdffvffffdddddd a stfffffffdfdfdfdfdfgdring"
document.write("The longest string is " + (longest_word(string)))