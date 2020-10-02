
// smallest
exports.min = function min(array) {
  let minValue = array
      ? array.reduce((smallest, current) => Math.min(smallest, current), 0)
      : 0;

  return minValue;
};

// biggest
exports.max = function max(array) {
  let maxValue = array
      ? array.reduce((biggest, current) => Math.max(biggest, current), 0)
      : 0;

  return maxValue;
};

// average
exports.avg = function avg(array) {
  if (array && array.length !== 0) {
      let average = 0;
      average = array.reduce((sum, current) => (sum += current), 0);
      return average / array.length;
  }
  return 0;
}