/**
 * JavaScript extend.
 */

/*global define*/


/**
 * Global library. Providing basic utility functions.
 */
define(function() {
  var jsx = function() {};

  var _papapap = jsx.prototype;
  _papapap.test = function() {
    myPrivate();
  };
  module.exports = jsx;

  var myPrivate = function() {};

  return {
    'testFunc': _papapap.test,
    'isPrivate': myPrivate
  };
});