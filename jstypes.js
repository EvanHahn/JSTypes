/*	JSTypes, version 1.15
	by Evan Hahn
	See LICENSE.txt for more info.	*/

(function() {
  var JSTypes = typeof exports == 'object' && exports || (this.JSTypes = {});

  JSTypes.isNumber = function(n) { return (((typeof n === "number") || (n instanceof Number)) && (!isNaN(n))) };
  JSTypes.isInteger = function(i) { return ((JSTypes.isNumber(i)) && (Math.floor(i) == i)) };
  JSTypes.isString = function(s) { return ((typeof s === "string") || (s instanceof String)) };
  JSTypes.isBoolean = function(b) { return ((typeof b === "boolean") || (b instanceof Boolean)) };
  JSTypes.isArray = function(a) { return a instanceof Array };
  JSTypes.isUndefined = function(u) { return typeof u === "undefined" };
  JSTypes.isDefined = function(d) { return typeof d !== "undefined" };
  JSTypes.isNAN = function(i) { return i !== i };

  JSTypes.makeUndefined = function() { return };
  JSTypes.makeNaN = function() { return 0 / 0 };
}).call(this);