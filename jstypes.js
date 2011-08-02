/*	JSTypes, version 1.15
	by Evan Hahn
	See LICENSE.txt for more info.	*/

(function() {
  var JSTypes = typeof exports == 'object' && exports || (this.JSTypes = {}), getClass = {}.toString;

  JSTypes.isNumber = function(n) { return getClass.call(n) == '[object Number]' };
  JSTypes.isInteger = function(i) { return JSTypes.isNumber(i) && Math.floor(i) == i };
  JSTypes.isString = function(s) { return getClass.call(s) == '[object String]' };
  JSTypes.isBoolean = function(b) { return getClass.call(b) == '[object Boolean]' };
  JSTypes.isArray = function(a) { return getClass.call(a) == '[object Array]' };
  JSTypes.isUndefined = function(u) { return typeof u == 'undefined' };
  JSTypes.isDefined = function(d) { return typeof d != 'undefined' };
  JSTypes.isNAN = function(i) { return i != i };

  JSTypes.makeUndefined = function() { return };
  JSTypes.makeNaN = function() { return 0 / 0 };
  JSTypes.makeInfinity = function() { return 1 / 0 };
}).call(this);