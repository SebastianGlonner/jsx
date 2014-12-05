
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
  // Minjector.config({
  //   baseUrl: './'
  // });
}

var jsx;

beforeEach(function(done) {
  define(['../bin/jsx.min'], function(jsxObject) {
    jsx = jsxObject;
    done();
  });
});

describe('Jsx Specs', function() {

  describe('extend _String_ with functions like', function() {

    it('.startsWith(needle, startPosition), case sensitive', function() {
      expect('Some string'.startsWith('Some ')).toBeTruthy();
      expect(' Some string'.startsWith('Some')).toBeFalsy();
      expect('some string'.startsWith('Some')).toBeFalsy();

      expect('some string'.startsWith('string', 5)).toBeTruthy();
      expect('some string'.startsWith('string', 4)).toBeFalsy();
      expect('some string'.startsWith('string', 6)).toBeFalsy();

      expect('some string'.startsWith(' ', 4)).toBeTruthy();
      expect('some string some string some str'.startsWith('some', 12))
        .toBeTruthy();
      expect('some string some string'.startsWith('some')).toBeTruthy();
    });
  });
});
