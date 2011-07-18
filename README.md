# JSTypes - version 1.00 #

JSTypes is a small JavaScript library that does two things:

1. Check if variables are of certain types (numbers, strings, undefined)
2. Reliably create certain values (undefined, NaN)

Examples:

```javascript
var x = 1;
var y = new Number(22);
x instanceof Number;    // false
JSTypes.isNumber(x);    // true
JSTypes.isNumber(y);    // true
```
```javascript
var x;
JSTypes.isUndefined(x);    // true
undefined = 10;    // this is terrible code, but it might get written!
JSTypes.isUndefined(x);    // still true
```
```javascript
var x = 5;
undefined = 10;
x = undefined;    // bad: x = 10
x = JSTypes.makeUndefined();    // good: x is now really undefined
JSTypes.isUndefined(x);    // true
```

I recommend (and do) move this library into your code's namespace if you're writing a library. Just replace all occurrences of `JSTypes` with your library's namespace.

For licensing info, see LICENSE.txt.