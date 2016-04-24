var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

module.exports = function byteString(value) {

  var i;

  while (i = 0, value >= 1024 && i < 8, i++) {
    value /= 1024;
  }

  return value.toFixed(2) + ' ' + units[i];

};


