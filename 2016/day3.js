const fs = require('fs');
const _ = require('lodash/fp');
const clean = _.curry(require('underscore.string/clean'))
const data = fs.readFileSync(__dirname + './data/day3.txt', 'utf8');

const parseDataHorizontally = _.compose(
  _.map(_.compose(_.map(Number), _.split(' '), clean)),
  _.split('\n')
)

const sliceVertically = _.curry(function (list, result = []) {
  if (!list.length) return result;
  for (var i = 0; i < 3; i++) {
    result = result.concat([list[i], list[i+3], list[i+6]]);
  }
  return sliceVertically(list.slice(9), result);
});

const splitInThrees = _.curry(function (list, result = []) {
  if (!list.length) return result;
  result = result.concat([list.slice(0, 3)]);
  return splitInThrees(list.slice(3), result);
});

const parseDataVertically = _.compose(
  splitInThrees,
  sliceVertically,
  _.flatten,
  _.map(_.compose(_.map(Number), _.split(' '), clean)),
  _.split('\n')
);

const filterValidTriangles = _.compose(
  _.filter(([a,b,c]) => a + b > c),
  _.map(triangle => triangle.sort((a, b) => a - b))
)

const solvePart1 = _.compose(filterValidTriangles, parseDataHorizontally);
const solvePart2 = _.compose(filterValidTriangles, parseDataVertically);

// console.log(solvePart1(data).length);
// console.log(solvePart2(data).length);
