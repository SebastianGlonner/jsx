(function() {
  var PATH_SEP, dir_root;
  if (this.isNodeJs) {
    var path = require('path');
    PATH_SEP = path.sep;

    dir_root = __dirname + PATH_SEP;

  } else {
    PATH_SEP = '/';

    dir_root = './';
  }

  var dir_src = dir_root + 'src' + PATH_SEP,
      dir_bin = dir_root + 'bin' + PATH_SEP,
      dir_tests = dir_root + 'tests' + PATH_SEP;


  // var config = require('./config.js');
  var config = {};


  /**
   * Directories
   * @type {Object}
   */
  config.DIR = {
    ROOT: dir_root,
    SRC: dir_src,
    BIN: dir_bin,
    TESTS: dir_tests
  };

  var isNodeJs = typeof exports !== 'undefined' && this.exports !== exports;

  /**
   * Configuration
   * @type {Object}
   */
  if (isNodeJs) {
    module.exports = config;
  } else {
    window.CONFIG = config;
  }
})();
