
// 默认升序
function defaultSort(a, b) {
  return a < b;
}

module.exports = function quickSort(array, sortFunc) {
  if (!array || array.length <= 1) {
    return array;
  }

  sortFunc = typeof sortFunc === 'function' ? sortFunc : defaultSort;
  var pivotIndex = Math.floor(array.length / 2) ;
  var pivot = array.splice(pivotIndex, 1)[0];
  var leftArr = [];
  var rightArr = [];

  for (var i = 0; i < array.length; ++i) {
    if (sortFunc(array[i], pivot)) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return quickSort(leftArr, sortFunc).concat([pivot]).concat(quickSort(rightArr, sortFunc));
}
