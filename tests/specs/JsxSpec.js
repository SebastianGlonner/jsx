
// ATTENTION:
// This test spec is supposed to run in node AND browser.

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

var isNodeJs =
    typeof exports !== 'undefined' && this.exports !== exports;

if (isNodeJs) {
  var config = require(process.cwd() + '/bootstrap.node.js');
  require(config.DIR.SRC + 'minjector');

  Minjector.config({
    baseUrl: config.DIR.TESTS_DATA,
    libUrl: config.DIR.TESTS_DATA + 'lib/'
  });
} else {
  console.log('whaaat');
  // The minjector library will be loaded in the HTML spec file.
  Minjector.config({
    baseUrl: './',

  });
}

var jsx;

beforeEach(function(done) {
  define(['../jsx'], function(jsxObject) {
    jsx = jsxObject;
    done();
  });
});

describe('Jsx Specs', function() {

  describe('extend String with functions like', function() {

    describe('.startsWith()', function() {
      it('returns true', function() {

      });
    });
  });
});
