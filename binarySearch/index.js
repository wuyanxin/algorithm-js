
module.exports = function binarySearch(array, num) {

  var low = 0;
  var high = array.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (array[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
