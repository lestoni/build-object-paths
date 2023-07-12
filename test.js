const assert = require('assert');
const objPaths = require('./');

describe('build-object-paths', function(){
  const data = {
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

    const paths = objPaths(data);

    assert.ok(Array.isArray(paths));
    assert.notEqual(paths.length, 0);
  });
});
