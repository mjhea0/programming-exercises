/** Find missing integer in a set from 1-10 */

function oneMissing(arr) {

  // sort array
  var sortedArray = arr.slice(0).sort(function(a, b) {return a - b;});


  // *** functional approach ** //

  var missing = sortedArray.filter(function(num, i){
    return sortedArray[i+1] - num > 1;
  }).map(function(num){
    return num +1;
  });

  return missing;

  // *** procedural ** //

//   var missing = [];
//   for (var i = 0; i < sortedArray.length; i++) {
//     if(sortedArray[i+1] - sortedArray[i] > 1) {
//       missing.push(sortedArray[i]+1);
//     }
//   }

//   return missing;

}
