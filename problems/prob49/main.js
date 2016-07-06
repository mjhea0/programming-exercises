function countIt(str) {
  // remove blank space
  var formattedString = str.replace(/\s/g, '');
  // convert to lowercase
  var lowerCaseString = formattedString.toLowerCase();
  // convert to array
  var wordArray = lowerCaseString.split('');
  // create container
  var results = {};
  // loop thrrough array
  for (var i = 0; i < wordArray.length; i++) {
    // make sure the element is a letter
    if ( wordArray[i] >=  'a' && wordArray[i] <= 'z' ) {
      // check if letter is a key
      if (wordArray[i] in results) {
        // increment if key
        results[wordArray[i]] += 1;
      } else {
        // add if not key
        results[wordArray[i]] = 1;
      }
    }
  }
  console.log(results)
  // return the results
  return results;
}