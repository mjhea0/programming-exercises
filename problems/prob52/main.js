// non-destructive
// alters the inputs/arguments/state
function combineAndSort(array1, array2) {
  var newArray = array1.slice();
  array2.forEach(function(el) {
    newArray.push(el);
  });
  return newArray.sort();
}



// // destructive
// function combineAndSort(array1, array2) {
//   var newArray = array1.splice();
//   array2.forEach(function(el) {
//     newArray.push(el);
//   });
//   return newArray.sort();
// }
//
// function combineAndSort(array1, array2) {
//   array2.forEach(function(el) {
//     array1.push(el);
//   });
//   return array1.sort();
// }
