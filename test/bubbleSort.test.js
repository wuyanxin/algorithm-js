
var bubbleSort = require('../bubbleSort');

describe('bubbleSort', function() {
  describe('#origin should not change', function () {
    it('should not change origin array', function () {
      var origin = [3, 1, 2];
      bubbleSort(origin).should.eql([1, 2, 3]);
      origin.should.eql([3, 1, 2]);
    })
  });

  describe('#test asc', function() {
    it('should return [1, 2, 3]', function() {
      bubbleSort([2, 3, 1]).should.eql([1, 2, 3]);
    });

    it('should return [1, 2, 3, 4]', function() {
      bubbleSort([2, 3, 1, 4]).should.eql([1, 2, 3, 4]);
    });
  });
});
