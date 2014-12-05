/**
 * JavaScript extend.
 */

/*global define*/


/**
 * Global library. Providing basic utility functions.
 */
define(function() {
  'use strict';

  /**
   * Polyfill's
   */
  if (typeof String.prototype.startsWith !== 'function') {
    /**
     * Wheather or not the string starts with the given string.
     * @param  {string} s
     * @param  {int} p Start position for searching.
     * @return {boolean}
     */
    String.prototype.startsWith = function(s, p) {
      p = p || 0;
      return this.indexOf(s, p) === p;
    };
  }

  if (typeof String.prototype.endsWith !== 'function') {
    /**
     * Wheather or not the string starts with the given string.
     * @param  {string} s
     * @return {boolean}
     */
    // String.prototype.endsWith = function(s) {
    //   return this.lastIndexOf(s) === this.length - s.length;
    // };
  }

  /**
   * Utils.
   * @type {Object}
   */
  var jsx = {};

  return jsx;
});
