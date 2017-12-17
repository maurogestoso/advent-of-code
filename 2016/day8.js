const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs');
const data = fs.readFileSync(__dirname + './data/day8.txt', 'utf8');

const display = _.range(6).reduce((acc) => {
  acc.push(_.range(50).reduce((acc) => {
    acc.push('.');
    return acc;
  }, []));
  return acc;
}, []);

const parseData = fp.compose(
  fp.map(fp.split(' ')),
  // fp.slice(0, 5),
  fp.split('\n')
);

const modifyDisplay = fp.curry(function (display, args) {
  const ops = {};
  ops.rect = function (display, dimensions) {
    dimensions = dimensions.split('x').map(Number);
    const [width, height] = dimensions;
    return display.map(function (row, rowIndex) {
      return row.map(function (value, colIndex) {
        return (colIndex < width && rowIndex < height) ? '#' : value;
      });
    });
  };
  ops.rotate = function (display, rowOrCol, whichOne, by, howMany) {
    whichOne = +whichOne.split('=')[1];
    howMany = +howMany;
    const newDisplay = display.reduce((acc, row) => {
      acc.push(row.slice());
      return acc;
    }, []);
    if (rowOrCol === 'row') {
      newDisplay[whichOne] = display[whichOne].reduce(function (acc, value, i, row) {
        const newIndex = (i + howMany) % row.length;
        acc[newIndex] = value;
        return acc;
      }, []);
    } else {
      const col = display.map(function (row) {
        return row[whichOne];
      }).reduce((acc, value, i, col) => {
        const newIndex = (i + howMany) % col.length;
        acc[newIndex] = value;
        return acc;
      }, []);
      newDisplay.forEach((row, i) => {
        row[whichOne] = col[i];
      });
    }
    return newDisplay;
  };
  return ops[args[0]](display, ...args.slice(1));
});

const solvePart1 = fp.compose(
  console.log,
  fp.reduce((total, n) => total + n, 0),
  fp.map(fp.compose(fp.prop('length'), fp.filter(x => x === '#'))),
  fp.reduce(modifyDisplay, display),
  parseData
)

// solvePart1(data);

const solvePart2 = fp.compose(
  display => {
    _.range(display[0].length/5).forEach(i => {
      display.forEach(row => {
        console.log(row.slice(5*i, 5*i + 5));
      });
      console.log('----------------------')
    })
  },
  fp.reduce(modifyDisplay, display),
  parseData
);

// solvePart2(data);

module.exports = modifyDisplay;
