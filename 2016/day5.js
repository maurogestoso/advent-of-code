const crypto = require('crypto');
const _ = require('lodash');
const fp = require('lodash/fp');

const doorId = 'reyedfim';

const getValidHashes1 = fp.curry(function (length, id) {
  let hashes = [];
  let num = 0;
  while (hashes.length < length) {
    const hash = crypto.createHash('md5');
    hash.update(id + num);

    const hexDigest = hash.digest('hex');

    if (_.every(hexDigest.slice(0,5), n => n === '0')) {
      hashes.push(hexDigest);
    }
    count++;
    num++;
  }
  return hashes;
});

const solvePart1 = fp.compose(
  fp.join(''),
  fp.map(hash => hash[5]),
  getValidHashes1(8)
);

const getValidHashes2 = fp.curry(function (length, id) {
  let hashes = [];
  let positions = {};
  let num = 0;
  while (hashes.length < length) {
    const hash = crypto.createHash('md5');
    hash.update(id + num);
    const hexDigest = hash.digest('hex');
    if (
      _.every(hexDigest.slice(0,5), n => n === '0') 
      && !positions[hexDigest[5]] 
      && +hexDigest[5] >= 0
      && +hexDigest[5] <= 7
    ) {
      console.log(hexDigest)
      hashes.push(hexDigest);
      positions[hexDigest[5]] = hexDigest[5]
    }
    num++;
  }
  return hashes;
});

const solvePart2 = fp.compose(
  fp.join(''),
  fp.reduce((acc, curr) => {
    acc[curr.pos] = curr.char;
    return acc; 
  }, []),
  fp.map(hash => Object.assign({}, hash, {
    pos: hash[5],
    char: hash[6]
  })),
  getValidHashes2(8)
)

// let count = 0;

// console.time('part1');
// console.log(solvePart1(doorId));
// console.timeEnd('part1');

// console.log(count);

// console.time('part2');
// console.log(solvePart2(doorId));
// console.timeEnd('part2');
