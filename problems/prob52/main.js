function combineAndSort(array1, array2) {
  var newArray = array1.slice();
  array2.forEach(function(el) {
    newArray.push(el);
  });
  return newArray.sort();
}
