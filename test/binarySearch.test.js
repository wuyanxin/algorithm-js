
var binarySearch = require('../binarySearch');

describe('binarySearch', function() {

  describe('#test binary search', function() {
    it('should return -1', function () {
      binarySearch([1, 3, 5, 6, 10], 11).should.eql(-1);
    });

    it('should return 3', function() {
      binarySearch([1, 3, 5, 6, 10], 6).should.eql(3);
    });
  });
});
