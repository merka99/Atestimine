function add(x, y) {
    var result;
    if (typeof x && typeof y) !== 'number') {
        throw new Error('Number');
    }
    result = x+y;
    if parseInt(result) !== result) {
        result = parseFloat(result.toFixed(1));
    }
    return result;
}
