const fs = require('fs');

const input = fs.readFileSync('./1.txt', 'utf8').trim()

const parseInput = (raw) => {
  return raw
    .split('')
    .map(Number);
}

const calc = nums => {
  const len = nums.length;
  return nums.reduce((acc, num, i) => {
    return num === nums[(i + 1)%len] ? acc + num : acc;
  }, 0);
}

console.log(calc(parseInput('1122')));
console.log(calc(parseInput('1111')));
console.log(calc(parseInput('1234')));
console.log(calc(parseInput('91212129')));
console.log(calc(parseInput(input)));

const calc2 = nums => {
  const len = nums.length;
  return nums.reduce((acc, num, i) => {
    return num === nums[(i + len/2)%len] ? acc + num : acc;
  }, 0);
}
console.log(calc2(parseInput('1212')));
console.log(calc2(parseInput('1221')));
console.log(calc2(parseInput('123425')));
console.log(calc2(parseInput('123123')));
console.log(calc2(parseInput('12131415')));
console.log(calc2(parseInput(input)));


