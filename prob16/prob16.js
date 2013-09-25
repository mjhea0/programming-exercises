function random_string(num) {
    text = "";
    letters = "abcdefghijklmnopqrstuvwxyz";
    for( var i=0; i <= num; i++ )
        text += letters.charAt(Math.floor(Math.random() * letters.length));
    return text;
}

function char_test(string1, string2) {
	if (string1[0,1] === string2[0,1]) {
		return true;
	} else {
		return false;
	}
}

rand_string1 = random_string(10)
rand_string2 = random_string(10)
document.write("The strings are " + rand_string1 + " and " + rand_string2 + "<br>")
document.write(char_test(rand_string1, rand_string2))