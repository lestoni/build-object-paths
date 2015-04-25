/**
 * Load Module Dependencies.
 */
var _ = require('lodash');

/**
 * Build object keys paths.
 *
 * @param {Object} obj Object to construct paths from
 *
 * @return {Array} paths Object paths
 */
module.exports = function buildPaths(obj){
  var keys = _.keys(obj);
  var paths = [];

  keys.forEach(function (key) {
    paths.push(key);

    if(_.isPlainObject(obj[key])) {
      var subPaths = buildPaths(obj[key]);

      subPaths = _.map(subPaths, function (p){
        return key + '.' + p;
      });

      paths = paths.concat(subPaths);

    }
  });
  return paths;
};
