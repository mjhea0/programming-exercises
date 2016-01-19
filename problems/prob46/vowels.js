/*

Create a function that takes a word as an argument and returns true if and only if all of the vowels in the word are the same.
  - myFn('oligopoly') => false
  - myFn('zoom') => true

1. Break apart word into an array of letters
2. Determine if each letter is a vowel
  - If so, add the letter to an array
3. Check to see if all letters in the vowel array are the same

*/


// ** Globals **//

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];


// ** Controller ** //

function compareVowels (str) {
  var strLower = toLower(str);
  var splitArray = splitString(strLower);
  var vowelArray = vowelParse(splitArray);
  var clone = vowelArray.slice(0);
  var solution = vowelCompare(vowelArray, clone);
  return solution;
}

console.log(compareVowels("Oligopoly"));
console.log(compareVowels("Bzz"));
console.log(compareVowels("Zoom"));


// ** Helper Functions ** //

function splitString(str) {
  return str.split('');
}

function toLower(str) {
  return str.toLowerCase();
}

function vowelParse(array) {
  var vowelArray = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (array[i] === vowels[j]) {
        vowelArray.push(array[i]);
      }
    }
  }
  return vowelArray;
}

function vowelCompare(array1, array2) {
  if (!array1.length) {
    return false;
  } else {
    for (i = 1; i < array1.length; i++) {
      for (j = 0; j <= array2.length; j++) {
        if (array1[i] === array2[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}