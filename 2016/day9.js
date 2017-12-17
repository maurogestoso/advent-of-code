const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs');
const data = fs.readFileSync(__dirname + './data/day9.txt', 'utf8');

function repeatStr (str, times) {
  return _.chain(times)
    .range()
    .reduce((acc) => {
      return acc + str;
    }, '')
    .value();
}

function solvePart1 (str) {
  let result = '', head, strToRepeat;
  while (str.length > 0) {
    head = str[0];
    str = str.slice(1);
    if (head === '(') {
      const [length, times] = str.slice(0, str.indexOf(')')).split('x').map(Number);
      str = str.slice(str.indexOf(')') + 1);
      strToRepeat = str.slice(0, length);
      str = str.slice(length);
      result += repeatStr(strToRepeat, times);
      continue;
    } else {
      result += head;
      continue;
    }
  }
  return result;
}

// function solvePart2 (str) {
//   let chars = str.split('');
//   let total = 0, howMany, times;
//   while (chars.length > 0) {
//     if (chars.indexOf('(') === -1) {
//       total += chars.splice(0, chars.length).length;
//       continue;
//     }
//     total += chars.splice(0, chars.indexOf('(')).length;
//     [howMany, times] = chars
//       .splice(0, chars.indexOf(')') + 1)
//       .slice(1, -1)
//       .join('').split('x')
//       .map(Number);
//     chars = repeatStr(chars.splice(0, howMany)
//       .join(''), times)
//       .split('')
//       .concat(chars);
//     continue;
//   }
//   return total;
// }

function solvePart2 (str) {
  const weights = new Array(str.length + 1).join('1').split('').map(Number);
  let isSpecial = false, howMany, times;
  return str.split('').reduce(function (total, cv, i, chars) {
    if (cv === '(') {
      isSpecial = true;
      [howMany, times] = chars.slice(i + 1, chars.indexOf(')', i)).join('').split('x').map(Number);
      return total;
    }
    
    if (cv === ')') {
      isSpecial = false;
      for (let w = i + 1; w <= i + howMany; w++) {
        weights[w] *= times;
      }
      return total;
    }
    
    if (isSpecial) {
      return total;
    }

    return total + weights[i];
  }, 0)
}

console.log(solvePart2(data));

module.exports = {
  repeatStr, solvePart1, solvePart2
};
