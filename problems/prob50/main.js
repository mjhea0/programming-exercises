// function checkRamp(num) {
//   // convert number to string then create an array
//   var numberArray = num.toString().split('');
//   // loop through the array
//   for (var i = 0; i < numberArray.length; i++) {
//     // check to see if the current number is less than
//     // or equal two the next number
//     if (parseInt(numberArray[i]) <= parseInt(numberArray[i+1])) {
//       // if true
//       return true;
//     } else {
//       // if false
//       return false;
//     }
//   }
// }


// function checkRamp(num) {
//   // convert number to string
//   numString = num.toString();
//   // loop until end of string
//   // why start at 1?
//   for (var i = 1; i < numString.length; i++) {
//     // check to see if the previous number is
//     // greater than the current number
//     if (numString[i - 1] > numString[i]) {
//       // if false
//       return false;
//     }
//   }
//   // is a valid ramp number!
//   return true;
// }

/*

convert number to string
loop (0 to length of string)
  check if prev num is greater than current num
    if yes - return false
if no - return true

*/

function checkRamp(num) {
  var numStr = num.toString();
  for (var i = 1; i < numStr.length; i++) {
    if (numStr[i] < numStr[i-1]) {
      return false;
      // break;
    }
  }
  return true;
  // break
}

/*

convert number to string
sort
check if original is the same as sorted
  if yes - return true
  if no - return false

*/

// function checkRamp(num) {
//   if(num === num.sort(){
//     return true
//   })

// }

/*

    original  sorted
1.  1234      1234
2.  1324      1234
3.  1111      1111
4.  0000      0000
5.  1230      0123

*/


















