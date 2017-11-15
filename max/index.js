module.exports = max;
var math = Math;
var maximum = math.max;
var inf = -Infinity;

function max(list) {
    return maximum.apply(math, [inf].concat(list || []));
}