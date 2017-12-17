exports.getMinMax = (row) => (
  row.reduce((acc, n) => {
    if (n > acc.max) acc.max = n;
    if (n < acc.min) acc.min = n;
    return acc;
  }, {min: Infinity, max: -Infinity})
);

exports.findEvenlyDivisible = (row) => {
  let a, b;
  for (let i = 0; i < row.length; i++) {
    a = row[i];
    for (let j = i + 1; j < row.length; j++) {
      b = row[j];
      if (a % b === 0) return [a, b];
      if (b % a === 0) return [b, a];
    }
  }
}
