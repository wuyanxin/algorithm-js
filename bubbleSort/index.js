
module.exports = function bubbleSort(array) {
  if (!array || array.length <= 1) {
    return array;
  }

  var result = array.slice(0);
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        var temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}
