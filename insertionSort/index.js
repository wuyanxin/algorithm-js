module.exports = function insertionSort(array) {
  if (!array || array.length <= 1) {
    return array;
  }

  var sortedArr = array.slice(0, 1); // 取第一个对象作为已排数组
  var unsortedArr = array.slice(1); // 剩余的对象一一在已排数组中寻找合适位置

  while (unsortedArr.length) {
    var tmp = unsortedArr.pop();
    for (var i = 0; i < sortedArr.length; i++) {
      if (tmp < sortedArr[i]) {
        sortedArr.splice(i, 0, tmp);
        break;
      } else if (i === sortedArr.length - 1) {
        // 如果tmp大于已排数组的所有对象，则插入到最后
        sortedArr.push(tmp);
        break;
      }
    }
  }

  return sortedArr;
}
