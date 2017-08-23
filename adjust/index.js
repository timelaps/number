module.exports = decimalAdjust;
var isUndefined = require('@timelaps/is/undefined');
var toNumber = require('@timelaps/hacks/to-number');
var isNumber = require('@timelaps/is/number');
/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (isUndefined(exp) || toNumber(exp) === 0) {
        return Math[type](value);
    }
    value = toNumber(value);
    exp = toNumber(exp);
    // If the value is not a number or the exp is not an integer...
    if (!(isNumber(exp) && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](toNumber(value[0] + 'e' + (value[1] ? (toNumber(value[1]) - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return toNumber(value[0] + 'e' + (value[1] ? (toNumber(value[1]) + exp) : exp));
}