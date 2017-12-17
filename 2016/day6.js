const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs');
const data = fs.readFileSync(__dirname + './data/day6.txt', 'utf8');
// const data = `
// eedadn
// drvtee
// eandsr
// raavrd
// atevrs
// tsrnev
// sdttsa
// rasrtv
// nssdts
// ntnada
// svetve
// tesnvt
// vntsnd
// vrdear
// dvrsen
// enarar
// `.trim();

const getMostCommon = fp.compose(
  fp.prop('char'),
  (chars) => {
    return _.reduce(chars, (most, count, char) => {
      if (count > most.count) most = {char, count};
      return most;
    }, {char: '', count: 0})
  },
  fp.curry((col) => {
    return _.reduce(col, function (acc, char) {
      if (acc[char]) acc[char]++;
      else acc[char] = 1;
      return acc;
    }, {})
  })
);

const getLeastCommon = fp.compose(
  fp.prop('char'),
  (chars) => {
    return _.reduce(chars, (most, count, char) => {
      if (count < most.count) most = {char, count};
      return most;
    }, {char: '', count: Infinity})
  },
  fp.curry((col) => {
    return _.reduce(col, function (acc, char) {
      if (acc[char]) acc[char]++;
      else acc[char] = 1;
      return acc;
    }, {})
  })
);

const getColumns = fp.compose(
  (rows) => {
    return _.reduce(_.range(rows[0].length), (cols, i) => {
      let col = [];
      rows.forEach((row) => {
        col.push(row[i]);
      });
      cols.push(col);
      return cols;
    }, []);
  },
  fp.map(fp.split('')),
  fp.split('\n')
);

const solvePart1 = fp.compose(
  fp.join(''),
  fp.map(getMostCommon),
  getColumns
)

console.log(solvePart1(data));

const solvePart2 = fp.compose(
  fp.join(''),
  fp.map(getLeastCommon),
  getColumns
)

console.log(solvePart2(data));


// // console.log(getMostCommon(['a', 'a', 'b', 'b', 'a']))

// var nums = "123\n123\n123";

// console.log(getColumns(nums))
