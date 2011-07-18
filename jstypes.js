/*	JSTypes, version 1.00
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
// If you're looking for it, isNaN() is built in to JavaScript

JSTypes.makeUndefined = function() { return; };
JSTypes.makeNaN = function() { return parseInt(void 0) };