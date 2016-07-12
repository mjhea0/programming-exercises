function checkRamp(num) {
  // convert number to string then create an array
  var numberArray = num.toString().split('');
  // loop through the array
  for (var i = 0; i < numberArray.length; i++) {
    // check to see if the current number is less than
    // or equal two the next number
    if (parseInt(numberArray[i]) <= parseInt(numberArray[i+1])) {
      // if true
      return true;
    } else {
      // if false
      return false;
    }
  }
}