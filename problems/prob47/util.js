function flattenArray(arr, callback) {
  if (!Array.isArray(arr)) {
    return callback('Please use an array!');
  } else {
    var singleArray = [].concat.apply([], arr);
    return callback(null, singleArray);
  }
}

module.exports = flattenArray;

