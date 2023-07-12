const objPaths = require('./');

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


console.log(objPaths(data));
