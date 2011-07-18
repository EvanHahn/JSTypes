/*	JSTypes, version 1.10
	by Evan Hahn
	See LICENSE.txt for more info.	*/

var JSTypes = JSTypes || {};

JSTypes.isNumber = function(n) { return (((typeof n === typeof 1) || (n instanceof Number)) && (!isNaN(n))) };
JSTypes.isInteger = function(i) { return ((JSTypes.isNumber(i)) && (Math.floor(i) == i)) };
JSTypes.isString = function(s) { return ((typeof s === typeof "") || (s instanceof String)) };
JSTypes.isBoolean = function(b) { return ((typeof b === typeof true) || (b instanceof Boolean)) };
JSTypes.isArray = function(a) { return a instanceof Array };
JSTypes.isUndefined = function(u) { return typeof u === "undefined" };
JSTypes.isDefined = function(d) { return typeof d !== "undefined" };
JSTypes.isNAN = function(i) { return i !== i };

JSTypes.makeUndefined = function() { return };
JSTypes.makeNaN = function() { return 0 / 0 };