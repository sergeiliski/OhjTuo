describe("helloWorld", function() {
	it("says hello world", function() {
		expect(helloWorld()).toContain("world");
	});
});

describe("calculateBMI", function() {
	it("calculates bmi, should be 20.5", function() {
		expect(calculateBMI(75, 183)).toContain(20.5);
	});
});

describe("untilReserved", function() {
	it("checks time until reserved, should be 5", function() {
		expect(untilReserved(10, 00, 09, 55)).toEqual(5);
	});
});

describe("untilReserved", function() {
	it("checks time until reserved, should be 115", function() {
		expect(untilReserved(12, 00, 10, 05)).toEqual(115);
	});
});

describe("untilReserved", function() {
	it("checks time until reserved, should be Free for the day!", function() {
		expect(untilReserved(12, 00, 12, 05)).toEqual("Free for the day!");
	});
});

describe("isFree", function() {
	it("checks if the class is free, should be true", function() {
		expect(isFree(11, 15, 12, 45, 10, 30)).toEqual(true);
	});
});

describe("isFree", function() {
	it("checks if the class is free, should be false", function() {
		expect(isFree(10, 15, 12, 45, 10, 30)).toEqual(false);
	});
});

