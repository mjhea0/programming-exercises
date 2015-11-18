function csvParse(inputString) {
  var outputArray = [];
  inputArray = inputString.split(',');
  for (var i = 0; i < inputArray.length; i++) {
    if (!Number.isNaN(+inputArray[i])) {
      outputArray.push(+inputArray[i]);
    } else {
      outputArray.push(inputArray[i].replace(/['"]+/g, '').trim());
    }
  }
  return outputArray;
}

module.exports = csvParse;
