//function add(x, y) {
  //  var result;
    //if (typeof x && typeof y) !== 'number') {
    //    throw new Error('Number');
//    }
  //  result = x+y;
//    if parseInt(result) !== result) {
  //      result = parseFloat(result.toFixed(1));
//    }
  //  return result;
}
expect(add(2,3)).toBe(5);
expect(add(2, 'test')).toThrow();
expect(add(0.1, 0.2)).toBe(0.3);
