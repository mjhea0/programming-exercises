function randomString(num) {
  let text = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for(var i=0; i <= num; i++ )
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  return text;
}

function charTest(string1, string2) {
	if (string1 === string2) return true;
	return false;
}

const randString1 = randomString(10);
const randString2 = randomString(10);
console.log('The strings are ' + randString1 + ' and ' + randString2);
console.log(charTest(randString1, randString2));
console.log(charTest('test', 'test'));
