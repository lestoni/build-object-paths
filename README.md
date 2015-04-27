# build-object-paths

small utility to construct object keys paths.

[![Build Status](https://travis-ci.org/lestoni/build-object-paths.svg?branch=1.0.0)](https://travis-ci.org/lestoni/build-object-paths)
[![NPM](https://nodei.co/npm/build-object-paths.png?downloads=true&stars=true)](https://nodei.co/npm/build-object-paths/)


## install
```
  npm install build-object-paths
```
## examples

```javascript
  var objPaths = require('build-object-paths');
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

  console.log(objPaths(data));
```

output

```bash
  $ node test.js
  $ [ 'level1',
    'level1.level2',
    'level1.level3',
    'level1.level3.level4',
    'level1.level3.level5',
    'num' ]

```
## API

### objPaths({}#Object) = require('build-object-paths')

Pass in the Object to build paths from.

## license

MIT
