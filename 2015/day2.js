const fs = require('fs');
const input = fs.readFileSync('./data/day2.txt', 'utf8').split('\n');

function calcPaperAndRibbon (data) {
  return data.reduce((total, dimensions) => {
    const [a, b, c] = dimensions
    .split('x')
    .map(n => +n)
    .sort((a, b) => a - b);
    total.paper += (3 * a * b) + (2 * a * c) + (2 * b * c);
    total.ribbon += 2 * a + 2 * b + a * b * c;
    return total;
  }, {paper: 0, ribbon: 0});
}

const total = calcPaperAndRibbon(input);
console.log(`paper: ${total.paper} sqft`);  // 1606483
console.log(`ribbon: ${total.ribbon} ft`);  // 3842356

