var b = require('@timelaps/batterie');
var floor = require('.');
b.describe('floor', function () {
    b.expect(floor).toBeFunction();
    b.expect(floor()).toBeNan();
    b.expect(floor(1.7420286, -6)).toBe(1.742028);
});