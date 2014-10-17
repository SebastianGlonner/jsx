function doBootstrap() {
  var PATH_SEP, dir_root;
  if (this.isNodeJs) {
    var path = require('path');
    PATH_SEP = path.sep;

    dir_root = __dirname + PATH_SEP;

  } else {
    PATH_SEP = '/';

    dir_root = './';
  }

  var dir_tests = dir_root + 'tests' + PATH_SEP;


  // var config = require('./config.js');
  var config = {};


  /**
   * Directories
   * @type {Object}
   */
  config.DIR = {
    ROOT: dir_root,
    TESTS: dir_tests
  };

  return config;
}

doBootstrap.prototype.isNodeJs = isNodeJs =
    typeof exports !== 'undefined' && this.exports !== exports;

/**
 * Configuration
 * @type {Object}
 */
if (isNodeJs) {
  module.exports = doBootstrap();
} else {
  window.CONFIG = doBootstrap();
}
