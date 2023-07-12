/**
 * Load Module Dependencies.
 */
const _ = require('lodash');

/**
 * Build object keys paths.
 *
 * @param {Object} obj Object to construct paths from
 *
 * @return {Array} paths Object paths
 */
module.exports = function buildPaths(obj) {
  const keys = Object.keys(obj);
  let paths = [];

  keys.forEach(function (key) {
    paths.push(key);

    if (_.isPlainObject(obj[key])) {
      const subPaths = buildPaths(obj[key]);

      const formattedSubPaths = subPaths.map(function (p) {
        return key + '.' + p;
      });

      paths = paths.concat(formattedSubPaths);
    }
  });

  return paths;
};
