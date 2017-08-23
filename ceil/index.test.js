var b = require('@timelaps/batterie');
var ceil = require('.');
b.describe('ceil', function () {
    b.expect(ceil).toBeFunction();
    b.expect(ceil()).toBeNan();
    b.expect(ceil(1.7420286, -4)).toBe(1.7421);
});