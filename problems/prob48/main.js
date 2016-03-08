function intersection(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}