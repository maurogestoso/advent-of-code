const fs = require('fs');
const data = fs.readFileSync('./data/day1.txt', 'utf8').split('');

function calcFloorAndBasement (data) {
  return data.reduce((total, command, index) => {
    if (!total.basementIndex && total.floor === -1) total.basementIndex = index;
    total.floor = command === '(' ? ++total.floor : --total.floor;
    return total;
  }, {basementIndex: null, floor: 0}); 
}

const total = calcFloorAndBasement(data);
console.log(`final floor: ${total.floor}`); // 280
console.log(`basement index: ${total.basementIndex}`); // 1797
