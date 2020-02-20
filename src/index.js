
exports.min = function min(array) {
    if (!array || array.length === 0) { return 0; }
    const arr = array;
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr[0];
}

exports.max = function max(array) {
    if (!array || array.length === 0) { return 0; }
    const arr = array;
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr[arr.length - 1];
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) { return 0; }
    const sum = array.reduce((i, acc) => i + acc);
    return sum / array.length;
}
