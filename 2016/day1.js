const fs = require('fs');
const _ = require('lodash');
const data = fs.readFileSync(__dirname + './data/day1.txt', 'utf8').split(', ');

function calcBlockDistance (instructions) { 
  const cache = {};
  const dirs = [
    [0, 1],   // N
    [1, 0],   // E
    [0, -1],  // S
    [-1, 0]   // W
  ];
  let currDir = 0; // N
  let turn, dist, firstRepeated;

  const pos = instructions.reduce((pos, instruction) => {
    turn = instruction[0] === 'R' ? 1 : -1;
    dist = +instruction.slice(1);
    currDir = (currDir + turn) >= 0 ? (currDir + turn) % 4 : dirs.length + (currDir + turn);
    pos = _.range(dist).reduce((pos) => {
      pos[0] = pos[0] + (dirs[currDir][0]);
      pos[1] = pos[1] + (dirs[currDir][1]);
      if (!firstRepeated) {
        if (cache[pos.toString()]) {
          firstRepeated = pos.slice();
        } else {
          cache[pos.toString()] = pos.slice();
        }
      }
      return pos;
    }, pos);
    
    return pos;
  }, [0, 0]);
  
  return {
    part1: Math.abs(pos[0]) + Math.abs(pos[1]),
    part2: firstRepeated ? Math.abs(firstRepeated[0]) + Math.abs(firstRepeated[1])
 : undefined
  };
}

module.exports = {
  calcBlockDistance
};
