# JSTypes - version 1.40 #

JSTypes is a small JavaScript library that does two things:

1. Check if variables are of certain types (numbers, strings, undefined)
2. Reliably create certain values (`undefined`, `NaN`, `Infinity`)

Examples:

```javascript
var x = 1;
var y = new Number(22);
x instanceof Number;    // false; not what we want!
JSTypes.isNumber(x);    // true
JSTypes.isNumber(y);    // true
```
```javascript
var x;
JSTypes.isUndefined(x);    // true
undefined = 10;            // this is terrible code, but it might get written!
JSTypes.isUndefined(x);    // still true
```
```javascript
var x = 5;
undefined = 10;
x = undefined;                  // bad: x = 10
x = JSTypes.makeUndefined();    // good: x is now really undefined
JSTypes.isUndefined(x);         // true
```

I recommend (and do) move this library into your code's namespace if you're writing a library. Just replace all occurrences of `JSTypes` with your library's namespace.

For licensing info, see LICENSE.txt.

## API ##

Here's everything in the API.

* `JSTypes.isNumber(toCheck)` returns true if something is a number
* `JSTypes.isInteger(toCheck)` returns true if something is an integer
* `JSTypes.isString(toCheck)` returns true if something is a string
* `JSTypes.isBoolean(toCheck)` returns true if something is a boolean
* `JSTypes.isArray(toCheck)` returns true if something is an array
* `JSTypes.isDefined(toCheck)` returns true if something is defined (will return false for `undefined`, or `null`, or `NaN`)
* `JSTypes.isUndefined(toCheck)` returns true if something is `undefined`
* `JSTypes.isNAN(toCheck)` returns true if something is `NaN`
* `JSTypes.isInfinite(toCheck)` returns true of something is positive or negative infinity
* `JSTypes.makeUndefined()` always returns `undefined`, even if it's stupidly redefined
* `JSTypes.makeNaN()` always returns `NaN`, even if it's stupidly redefined
* `JSTypes.makeInfinity()` always returns `Infinity`, even if it's stupidly redefined

## Where is JSTypes used? ##

JSTypes has made its way into...

* [Fiesta.js](http://github.com/EvanHahn/Fiesta.js), a JavaScript game library of mine

If you use JSTypes yourself, feel free to add your stuff to this list!