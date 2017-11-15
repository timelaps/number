var b = require('@timelaps/batterie');
var max = require('./');
b.describe('max', function () {
    b.expect(max).toBeFunction();
    b.expect(max()).toBe(-Infinity);
    b.expect(max([30, 19, -30])).toBe(30);
});