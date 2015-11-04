// *** define functions *** //

function getPalindromes(str, result) {
  // compare substrings
  for (var i = 0; i < str.length; i++) {
    // compare one left
    if (str[i] === str[i - 1]) {
      result = analyzePalindrome(str[i] + str[i - 1], str, i - 1, i);
      // compare one right
    } else if (str[i] === str[i + 2]) {
      result = analyzePalindrome(str[i] + str[i + 1], str, i, i + 1);
      // compare one left AND one right
    } else if (str[i - 1] === str[i + 1]) {
      result = analyzePalindrome(str[i - 1] + str[i] + str[i + 1], str, i - 1, i + 1);
    }
  }
  return result;
}

var analyzePalindrome = function (currentResult, str, leftIndex, rightIndex) {
  while ((str[leftIndex - 1] === str[rightIndex + 1]) && (currentResult !== str)) {
    currentResult = str[leftIndex -= 1] + currentResult + str[rightIndex += 1];
  }
  if (currentResult.length > result.length) {
    result = currentResult;
  }
  return result;
};


// *** invoke functions *** //

var result = '';
var str = 'I am a dazzled racecar driver';
console.log(getLongestPalindrome(str, result) === 'd racecar d');
var result = '';
var str2 = 'wow racecar wow';
console.log(getLongestPalindrome(str2, result) === 'wow racecar wow');
