/*

Write a function `weirdWords()` that takes a string and changes every letter to the next letter in the alphabet and then returns the result. Note: spaces and special characters should remain the same. Capital letters should remain capitalized.
  - Input: `What is your name?`
  - Output: `Xibu jt zpvs obnf?`

 */

function weirdWords(str) {
  const stringArray = str.split('');
  const result = stringArray.map((letter) => {
    return getNextCharacter(letter);
  });
  return result.join('');
}

function getNextCharacter(char) {
  var newCode;
  // is character a word character?
  if(/\w/.test(char)) {
    // get an integer representing the string
    const currentCode = char.charCodeAt(0);
    // is the letter a 'z'?
    if(currentCode % 32 === 26) {
      // yes? go back to the begining
      newCode = currentCode - 25;
    } else {
      // no? go forward 1
      newCode = currentCode + 1;
    }
    char = String.fromCodePoint(newCode);
  }
  return char;
}

// console.log(weirdWords('What is your name?'));

// const weirdWords = (str) => {
//   // split string into an array, iterating through the new array
//   return str.split('').map(el => {
//     // el.charCodeAt(0) => converts character to the utf-16 integer
//     const getCharCode = el.charCodeAt(0)
//     // test if this code is valid -> http://stackoverflow.com/a/9539389/1799408
//     if (getCharCode > 64 && getCharCode < 122 )
//       // el.charCodeAt(0) + 1 => increment integer
//       // convert back to regular character
//       return String.fromCodePoint(el.charCodeAt(0) + 1);
//       // is the code a "z" return 'a'
//     else if (getCharCode === 123) {
//       return 'a';
//     } else {}
//       return el;
//   }).join('')
// }
//
// console.log(weirdWords('What is your name?'))
