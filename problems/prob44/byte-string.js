var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function byteString(value) {

  var i;

  for (i = 0; value >= 1024 && i < 8; i++) {
    value /= 1024;
  }

  return value.toFixed(2) + ' ' + units[i];
}

module.exports = byteString;


// var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

// function byteString(value) {
//   var factor = Math.pow(10, 2);
//   // var getUnit = ??????
//   var output = Math.ceil(value / Math.pow(1024, 2) * factor) / factor;

//   return num.toFixed(2) + ' ' + getUnit;
// }
