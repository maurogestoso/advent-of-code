const fp = require('lodash/fp');
const _ = require('lodash');
const fs = require('fs');

const parseData = fp.compose(
  fp.map((str) => {
    const parts = str.split('-');
    const last = parts.pop().split('[');
    return {
      name: parts.join('-'),
      sector: +last[0],
      checksum: last[1].slice(0, last[1].length - 1)
    }
  }),
  fp.split('\n')
);

const getTopChars = fp.curry(function (str, top = 5) {
  return _.chain(str)
    .split('-')
    .join('')
    .reduce(function (acc, char) {
      if (!acc[char]) acc[char] = 1;
      else acc[char] += 1;
      return Object.assign({}, acc);
    }, {})
    .reduce((acc, count, char) => {
      if(!acc[count]) acc[count] = [char];
      else acc[count].push(char);
      return acc;
    }, {})
    .mapValues((chars) => {
      return chars.sort();
    })
    .sortBy((val, key) => key)
    .reverse()
    .flatten()
    .slice(0, top)
    .join('')
    .value();
})

const solvePart1 = fp.compose(
  fp.reduce((acc, curr) => acc + curr, 0),
  fp.map(fp.prop('sector')),
  fp.filter(({name, checksum}) => name === checksum),
  fp.map(thing => Object.assign({}, thing, {
    name: getTopChars(thing.name)
  })),
  parseData
);

const shiftCipher = fp.curry(function (shift, char) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const i = abc.indexOf(char);
  return i === -1 ? ' ' : abc[(i + shift) % abc.length];
});

const solvePart2 = fp.compose(
  fp.prop('sector'),
  fp.prop(0),
  fp.filter(({content}) => {
    const easterWords = ['grass', 'scavenger', 'hunt', 'bunny', 'rabbit', 'egg', 'candy', 'basket', 'jellybean', 'chocolate', 'flower', 'dye'];
    return _.every(content, (word) => easterWords.indexOf(word) === -1)
  }),
  fp.map((thing) => {
    return Object.assign({}, thing, {
      content: thing.name
        .split('')
        .map(shiftCipher(thing.sector))
        .join('')
        .split(' ')
    })      
  }),
  fp.filter(({top5, checksum}) => top5 === checksum),
  fp.map(thing => Object.assign({}, thing, {
    top5: getTopChars(thing.name)
  })),
  parseData
)

module.exports = {
  getTopChars, shiftCipher
};
