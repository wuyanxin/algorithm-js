
// 默认升序
function defaultSort(a, b) {
  return a < b;
}

module.exports = function quickSort(array, sortFunc) {
  if (!array || array.length <= 1) {
    return array;
  }

  sortFunc = typeof sortFunc === 'function' ? sortFunc : defaultSort;

  var pivot = array[0];
  var leftArr = [];
  var rightArr = [];

  for (var i = 1; i < array.length; ++i) {
    if (sortFunc(array[i], pivot)) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return quickSort(leftArr, sortFunc).concat([pivot]).concat(quickSort(rightArr, sortFunc));
}
