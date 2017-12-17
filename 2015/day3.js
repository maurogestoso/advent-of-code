const fs = require('fs');
const data = fs.readFileSync('./data/day3.txt', 'utf8').split('');

function calcPresentsRobo (data, isRobo) {
  const total = data.reduce((total, command, i) => {
    const santa = i % 2 === 0 ? 'santa' : isRobo ? 'robo' : 'santa';
    switch (command) {
      case '>': total[santa].x++; break;
      case '<': total[santa].x--; break;
      case '^': total[santa].y--; break;
      case 'v': total[santa].y++; break;
    }
    const key = `${total[santa].x},${total[santa].y}`;
    total.houses[key] = !total.houses[key] ? 1 : total.houses[key] + 1;
    return total;
  }, {santa: {x: 0, y: 0}, robo: {x: 0, y: 0}, houses: {'0,0': 1}});
  return {
    houses: Object.keys(total.houses).length
  };
}

const total = calcPresentsRobo(data);
console.log(`houses: ${total.houses}`); // 2592
const totalRobo = calcPresentsRobo(data, true);
console.log(`houses: ${totalRobo.houses}`); // 2360
