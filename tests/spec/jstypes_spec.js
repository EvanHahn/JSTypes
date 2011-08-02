describe("JSTypes", function() {

	it("checks if a primitive value is a number (when it is)", function() {
		var x = 5;
		expect(JSTypes.isNumber(x)).toBeTruthy();
	});

	it("checks if a primitive value is a number (when it isn't)", function() {
		var x = "5";
		expect(JSTypes.isNumber(x)).toBeFalsy();
	});

	it("checks if a Number object is a number (when it is)", function() {
		var x = new Number(5);
		expect(JSTypes.isNumber(x)).toBeTruthy();
	});

	it("checks if an object is a number (when it isn't one)", function() {
		var x = new String("5");
		expect(JSTypes.isNumber(x)).toBeFalsy();
	});
	
	it("checks if undefined is a number", function() {
		var x;
		expect(JSTypes.isNumber(x)).toBeFalsy();
	});

	it("checks if a primitive value is an integer (when it is)", function() {
		var x = 5;
		expect(JSTypes.isInteger(x)).toBeTruthy();
	});

	it("checks if a primitive value is an integer (when it isn't)", function() {
		var x = 5.5;
		expect(JSTypes.isInteger(x)).toBeFalsy();
	});

	it("checks if a Number is an integer (when it is)", function() {
		var x = new Number(5);
		expect(JSTypes.isInteger(x)).toBeTruthy();
	});

	it("checks if a Number is an integer (when it isn't)", function() {
		var x = new Number(5.5);
		expect(JSTypes.isInteger(x)).toBeFalsy();
	});

	it("checks if a non-number is an integer", function() {
		var x = "5";
		expect(JSTypes.isInteger(x)).toBeFalsy();
	});

	it("checks if undefined is an integer", function() {
		var x;
		expect(JSTypes.isInteger(x)).toBeFalsy();
	});

	it("checks if a primitive value is a boolean (when it is)", function() {
		var x = true;
		expect(JSTypes.isBoolean(x)).toBeTruthy();
	});

	it("checks if a primitive value is a boolean (when it isn't)", function() {
		var x = "true";
		expect(JSTypes.isBoolean(x)).toBeFalsy();
	});

	it("checks if a Boolean object is a boolean (when it is)", function() {
		var x = new Boolean(true);
		expect(JSTypes.isBoolean(x)).toBeTruthy();
	});

	it("checks if an object is a boolean (when it isn't one)", function() {
		var x = new String("true");
		expect(JSTypes.isBoolean(x)).toBeFalsy();
	});
	
	it("checks if undefined is a boolean", function() {
		var x;
		expect(JSTypes.isBoolean(x)).toBeFalsy();
	});
	
	it("checks if a primitive array is an array (when it is)", function() {
		var x = [1, 2, 3];
		expect(JSTypes.isArray(x)).toBeTruthy();
	});

	it("checks if a primitive array is an array (when it isn't)", function() {
		var x = "123";
		expect(JSTypes.isArray(x)).toBeFalsy();
	});

	it("checks if an Array object is an array (when it is)", function() {
		var x = new Array(1, 2, 3);
		expect(JSTypes.isArray(x)).toBeTruthy();
	});

	it("checks if an object is an array (when it isn't one)", function() {
		var x = new String("123");
		expect(JSTypes.isArray(x)).toBeFalsy();
	});
	
	it("checks if undefined is an array", function() {
		var x;
		expect(JSTypes.isArray(x)).toBeFalsy();
	});
	
	it("checks if something is undefined (when it is)", function() {
		var x;
		expect(JSTypes.isUndefined(x)).toBeTruthy();
	});

	it("checks if something is undefined (when it is), even if undefined is re-defined", function() {
		undefined = 1;
		var x;
		expect(JSTypes.isUndefined(x)).toBeTruthy();
		undefined = void(0);
	});
	
	it("checks if something is undefined (when it isn't)", function() {
		var x = "undefined";
		expect(JSTypes.isUndefined(x)).toBeFalsy();
	});
	
	it("checks if something is defined (when it is)", function() {
		var x = "defined, baby!";
		expect(JSTypes.isDefined(x)).toBeTruthy();
	});
	
	it("checks if something is defined (when it is), even if undefined is re-defined", function() {
		undefined = 1;
		var x = "once again, I'm definitely defined";
		expect(JSTypes.isDefined(x)).toBeTruthy();
		undefined = void(0);
	});

	it("checks if something is defined (when it isn't)", function() {
		var x;
		expect(JSTypes.isDefined(x)).toBeFalsy();
	});
	
	it("checks if something is NaN (when it is)", function() {
		var x = 0 / 0;
		expect(JSTypes.isNAN(x)).toBeTruthy();
	});

	it("checks if something is NaN (when it isn't)", function() {
		var x = 5;
		expect(JSTypes.isNAN(x)).toBeFalsy();
	});

	it("checks if something is NaN (when it isn't, but JavaScript thinks so)", function() {
		var x = "hi";	// isNaN(x) is true, which is wrong!
		expect(JSTypes.isNAN(x)).toBeFalsy();
	});

	it("creates undefined", function() {
		undefined = 1;
		var x;
		expect(JSTypes.makeUndefined()).toEqual(x);
		undefined = x;
	});

	it("creates NaN", function() {
     	NaN = 5;
		expect(isNaN(JSTypes.makeNaN())).toBeTruthy();
		expect(JSTypes.makeNaN()).not.toEqual(JSTypes.makeNaN());
		NaN = 0 / 0;
	});

	it("creates Infinity", function() {
     	Infinity = 5;
     	expect(isFinite(JSTypes.makeInfinity())).toBeFalsy();
     	expect(JSTypes.isNumber(JSTypes.makeInfinity())).toBeTruthy();
     	Infinity = 1 / 0;
	});

});