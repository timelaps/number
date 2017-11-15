var b = require('@timelaps/batterie');
var min = require('./');
b.describe('min', function () {
    b.expect(min).toBeFunction();
    b.expect(min()).toBe(Infinity);
    b.expect(min([30, 19, -30])).toBe(-30);
});