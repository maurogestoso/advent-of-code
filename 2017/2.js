const fs = require('fs');

const {getMinMax, findEvenlyDivisible} = require('./helpers')

const input = fs.readFileSync(__dirname + '/data/2.txt', 'utf8')
  .trim()
  .split('\n')
  .map(r => r.split('\t'))
  .map(r => r.map(Number));

Array.prototype.tap = function () {
  console.log(this)
  return this;
}

const checksum1 = input
  .map(getMinMax)
  .map(({min, max}) => max - min)
  .reduce((total, n) => (total + n), 0)

console.log('*** PART 1:', checksum1);

const checksum2 = input
.map(findEvenlyDivisible)
.map(([a, b]) => a / b)
.reduce((total, n) => (total + n), 0)

console.log('*** PART 2:', checksum2);
