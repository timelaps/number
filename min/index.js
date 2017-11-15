module.exports = min;
var math = Math;
var minimum = math.min;
var inf = Infinity;

function min(list) {
    return minimum.apply(math, [inf].concat(list || []));
}