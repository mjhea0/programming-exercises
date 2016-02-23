var flattenArray = require('./util.js');

var nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var results = flattenArray(nestedArray, function(err, data){
  if (err) {
    return err;
  } else {
    return data;
  }
});

console.log(results);