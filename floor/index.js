module.exports = decimalRound;
var decimalAdjust = require('../adjust');

function decimalRound(value, exp) {
    return decimalAdjust('floor', value, exp);
}