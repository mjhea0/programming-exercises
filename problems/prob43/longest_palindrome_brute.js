/*

Brute force (no whitespace):

  sample string => "d racecar anna"

  1. Split string into an array of strings => ['d', 'racecar' 'anna']
  2. Loop through the array of strings, find if specific string is a
     palindrome; and, if so, push it into an array (using 'filter()')
     => ['racecar' 'anna']
  3. Find longest string (using `reduce()`) => ['racecar']

  How do you handle whitespace? :(

*/

// helpers
function splitString(str) {
  return str.split(' ');
}

function getPalindromes(arr) {
  return arr.filter(function(str) {
    return str === splitString(str).reverse().join('');
  });
}

// main
function getLongestPalindrome(str) {
  strArray = splitString(str);
  palindromeArr = getPalindromes(strArray);
  return palindromeArr.reduce(function (previous, current) {
    return current.length > previous.length ? current : previous;
  }, '');
}

console.log(getLongestPalindrome("d racecar anna") === "racecar");
