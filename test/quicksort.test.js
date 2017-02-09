
var quickSort = require('../quicksort');

describe('QuickSort', function() {
  describe('#test asc', function() {
    it('should return [1, 2, 3]', function() {
      quickSort([2, 3, 1]).should.eql([1,2,3]);
    });

    it('should return [1, 2, 3, 4]', function() {
      quickSort([2, 3, 1, 4]).should.eql([1,2,3,4]);
    });
  });

  describe('#test desc', function() {
    function desc(a, b) {
      return a > b;
    }

    it('should return [1, 2, 3]', function() {
      quickSort([2, 3, 1], desc).should.eql([3,2,1]);
    });

    it('should return [1, 2, 3, 4]', function() {
      quickSort([2, 3, 1, 4], desc).should.eql([4,3,2,1]);
    });
  });
});
