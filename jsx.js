/**
 * Native extend.
 */


/**
 * P O L Y F I L L s
 */
if (typeof String.prototype.startsWith !== 'function') {
  /**
   * Wheather or not the string starts with the given string.
   * @param  {string} s
   * @return {boolean}
   */
  String.prototype.startsWith = function(s) {
    return this.indexOf(s) === 0;
  };
}

if (typeof String.prototype.endsWith !== 'function') {
  /**
   * Wheather or not the string starts with the given string.
   * @param  {string} s
   * @return {boolean}
   */
  String.prototype.endsWith = function(s) {
    return this.indexOf(s) === 0;
  };
}


/**
 * Global library. Providing basic utility functions.
 *
 *
 */
define(function() {
  /**
   * Utils.
   * @type {Object}
   */
  var nx = {};

  return nx;
});
