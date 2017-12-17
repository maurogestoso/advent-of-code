const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs');
const data = fs.readFileSync(__dirname + './data/day7.txt', 'utf8');

const isAbba = fp.curry((str) => {
  const [a, b, c, d] = str.split('');
  if (a === d && b === c && a !== b) return true;
  if (str.length > 4) return isAbba(str.slice(1));
  else return false;
});

const isValidPair = fp.curry(({outside, inside}) => {
  return _.some(outside, isAbba) && !_.some(inside, isAbba);
});

const parseData = fp.compose(
  fp.map(line => {
    return _.mapValues(line, arr => {
      return arr.filter(val => !!val);
    });
  }),
  fp.map((line) => {
    return _.reduce(line, (acc, str) => {
      const [outside, inside] = str.split('[');
      acc.outside.push(outside);
      acc.inside.push(inside);
      return acc;
    }, {outside: [], inside: []})
  }), 
  fp.map(line => line.split(']')),
  // fp.slice(0, 10),
  fp.split('\n')
);

const solvePart1 = fp.compose(
  console.log,
  fp.prop('length'),
  fp.filter(isValidPair),
  parseData
)

const invertAba = fp.curry((str) => {
  const [a, b] = str.split('');
  return b + a + b;
});

const containsInverse = fp.curry((aba, targetStr) => {
  return targetStr.indexOf(invertAba(aba)) > -1;
});

const isAba = fp.curry((str) => {
  const [a, b, c] = str.split('');
  return a === c && a !== b;
});

const findAbaPair = fp.curry((targetStrings, source) => {
  if (source.length < 3) return false;

  const currStr = source.slice(0, 3);

  if (isAba(currStr)) {
    return (
      _.some(targetStrings, containsInverse(currStr)) ||
      findAbaPair(targetStrings, source.slice(1))
    );
  } 
  
  return findAbaPair(targetStrings, source.slice(1));
})

const solvePart2 = fp.compose(
  console.log,
  fp.prop('length'),
  fp.filter(({inside, outside}) => {
    return _.some(outside, findAbaPair(inside));
  }),
  parseData
);

module.exports = {
  isAbba, isValidPair, findAbaPair
};
