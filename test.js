test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); })

test("One Dollar should be 156.5 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const Yens = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;
    expect(fromDollarToYen(3.5)).toBe(547.75); })

test("One Yen should be 0.87 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const Pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.87;
    expect(fromYenToPound(3.5)).toBe(3.045); })