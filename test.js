var assert = require('assert');
var objPaths = require('./');

describe('build-object-paths', function(){
  var data = {
    level1: {
      level2: 2,
      level3: {
        level4: 4,
        level5: [1,2,3]
      }
    },
    num: 156
  };

  it('should return an array of paths', function() {

    var paths = objPaths(data);

    assert.ok(Array.isArray(paths));
    assert.notEqual(paths.length, 0);
  });
});
