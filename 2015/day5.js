const fs = require('fs');
const data = fs.readFileSync('./data/day5.txt', 'utf8').split('\n');

function countNiceStrings (strings) {
  const regexList = [/ab|cd|pq|xy/g, /(\w)\1/g, /[aeiou]/g];
  return strings.filter((string) => {
    return regexList.reduce((keepGoing, regex) => {
      return keepGoing && !regex.test(string);
    }, true);
  }).length;
}

const [bannedStrings, doubleChar, vowels] = [/ab|cd|pq|xy/g, /(\w)\1/g, /[aeiou]/g];

console.log(bannedStrings.test('acd'));

