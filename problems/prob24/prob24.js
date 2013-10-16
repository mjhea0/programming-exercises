function remove_punct(str) {
	return str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
}

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

var string = "I amdf$$$$$$$dffvffffdddddd a stfffffffdfdf&&&dfdfdfgdring"
document.write("The longest string is " + remove_punct(longest_word(string)))