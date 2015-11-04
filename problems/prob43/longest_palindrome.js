// global
var palindromes = [];

// helper function
function getPalindromes(str) {

  // compare substrings
  for (var i = 0; i < str.length; i++) {
    // compare left
    if (str[i] === str[i - 1]) {
      analyzePalindrome(str[i] + str[i - 1], str, i - 1, i);
      // compare right
    } else if (str[i] === str[i + 1]) {
      analyzePalindrome(str[i] + str[i + 1], str, i, i + 1);
      // compare left AND right
    } else if (str[i - 1] === str[i + 1]) {
      analyzePalindrome(str[i - 1] + str[i] + str[i + 1], str, i - 1, i + 1);
    }
  }

  return palindromes;

}

// helper function
var analyzePalindrome = function (result, str, leftIndex, rightIndex) {
  while (str[leftIndex - 1] === str[rightIndex + 1]) {
    result = str[leftIndex -= 1] + result + str[rightIndex += 1];
  }
  palindromes.push(result);
};

// main
function getLongestPalindrome(str) {
  palindromeArr = getPalindromes(str);
  return palindromeArr.reduce(function (previous, current) {
    return current.length > previous.length ? current : previous;
  }, '');
}

var str = 'I am a dazzled racecar driver';
console.log(getLongestPalindrome(str) === 'd racecar d');
