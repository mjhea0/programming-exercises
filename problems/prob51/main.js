//** definitions **//

function isPalindrome(input) {
  // sanitize string
  var sanitizeString = sanitize(input);
  return sanitizeString === reverseString(sanitizeString);
}

function sanitize(str) {
  return str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s/g, '');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}


//** calls **//

console.log(isPalindrome('rAceCar'));
console.log(isPalindrome('anna'));
console.log(isPalindrome('banana'));
console.log(isPalindrome('I, man, am regal - a German am I'));
console.log(isPalindrome('No lemons, no melon'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('Probably not a palindrome'));