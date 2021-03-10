
exports.min = function min (array) {
  if (Array.isArray(array) == false || array.length == 0) {
    return 0;
  }
  else {
    return array.sort(function (a, b) {
      return a - b;
    })[0];
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) == false || array.length == 0) {
    return 0;
  }
  else {
    return array.sort(function (a, b) {
      return a - b;
    })[array.length - 1];
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) == false || array.length == 0) {
    return 0;
  }
  else {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}
// maybe it's not a clever solution but i coded it myself
