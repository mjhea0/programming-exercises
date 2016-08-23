// brute force

/*

1- convert number to array of strings
1- iterate through array
2- multiply each grouping of 5 numbers (in order)
3- add product to an array
4- find largest value in array

 */

function productOfFiveOne(num) {
  var productArray = [];
  var largestValue = -Infinity;
  var numberArray = num.toString().split(''); // 1
  for (var i = 0; i < numberArray.length; i++) { // 2
    var product = ( // 3
      parseInt(numberArray[i]) *
      parseInt(numberArray[i + 1]) *
      parseInt(numberArray[i + 2]) *
      parseInt(numberArray[i + 3]) *
      parseInt(numberArray[i + 4])
    );
    if (!isNaN(product)) {
      productArray.push(product); // 4
    }
  }
  for (var j = 0; j < productArray.length; j++) { // 5
    if (productArray[j] > largestValue) {
      largestValue = productArray[j];
    }
  }
  return largestValue;
}

console.log('brute force 1:');

console.log(productOfFiveOne(111333321));
console.log(productOfFiveOne(155555));
console.log(productOfFiveOne(127289373913828309127381263));

// brute force take 2

/*

1- convert number to array
1- iterate through array
2- multiply each grouping of 5 numbers (in order)
3- add product to an array
4- find largest value in array as a seperate function

 */

function productOfFiveTwo(num) {
  var productArray = [];
  var numberArray = num.toString().split(''); // 1
  for (var i = 0; i < numberArray.length; i++) { // 2
    var product = ( // 3
      parseInt(numberArray[i]) *
      parseInt(numberArray[i + 1]) *
      parseInt(numberArray[i + 2]) *
      parseInt(numberArray[i + 3]) *
      parseInt(numberArray[i + 4])
    );
    if (!isNaN(product)) {
      productArray.push(product); // 4
    }
  }
  return getLargestValueFromAnArray(productArray);
}

function getLargestValueFromAnArray(arr) {
    var largestValue = -Infinity;
  for (var i = 0; i < arr.length; i++) { // 5
    if (arr[i] > largestValue) {
      largestValue = arr[i];
    }
  }
  return largestValue;
}

console.log('');
console.log('brute force 2:');

console.log(productOfFiveTwo(111333321));
console.log(productOfFiveTwo(155555));
console.log(productOfFiveTwo(127289373913828309127381263));

// brute force take 3

/*

1- convert number to array
1- iterate through array with a hof
2- multiply each grouping of 5 numbers (in order)
3- add product to an array
4- find largest value in array as a seperate function

 */

function productOfFiveThree(num) {
  var numberArray = num.toString().split(''); // 1
  var productArray = numberArray.map(function(num, index, arr) {
    var product = ( // 3
      parseInt(num) *
      parseInt(arr[index + 1]) *
      parseInt(arr[index + 2]) *
      parseInt(arr[index + 3]) *
      parseInt(arr[index + 4])
    );
    if (!isNaN(product)) {
      return product; // 4
    }
  });
  return getLargestValueFromAnArray(productArray);
}

function getLargestValueFromAnArray(arr) {
    var largestValue = -Infinity;
  for (var i = 0; i < arr.length; i++) { // 5
    if (arr[i] > largestValue) {
      largestValue = arr[i];
    }
  }
  return largestValue;
}

console.log('');
console.log('brute force 3:');

console.log(productOfFiveThree(111333321));
console.log(productOfFiveThree(155555));
console.log(productOfFiveThree(127289373913828309127381263));
