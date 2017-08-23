var b = require('@timelaps/batterie');
var round = require('.');
b.describe('round', function () {
    b.expect(round).toBeFunction();
    b.expect(round()).toBeNan();
    b.expect(round(1.7420286, -6)).toBe(1.742029);
});