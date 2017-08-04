var clamp = require('number/clamp');
var isNumber = require('@timelaps/is/number');
module.exports = function withinRange(number, min, max) {
    return isNumber(number) && number === clamp(number, min, max);
};