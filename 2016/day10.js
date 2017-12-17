const _ = require('lodash');
const fp = require('lodash/fp');
const fs = require('fs');
const data = fs.readFileSync(__dirname + './data/day10.txt', 'utf8');

const parseData = fp.compose(
  console.log,
  fp.reduce((acc, curr) => {
    if (curr[0] === 'value') {
      const [,value,,,,bot] = curr;
      acc[bot] = acc[bot] ? 
        Object.assign({}, acc[bot], {chips: acc[bot].chips.concat([+value])}) : 
        {bot, chips: [+value]};
      return acc;
    } 
    //
    else if (curr[0] === 'bot') {
      // bot 8 gives low to bot 16 and high to bot 38
      const [,bot,,,,lowType,lowValue,,,,highType,hightValue] = curr;
      acc[bot] = acc[bot] ?
        Object.assign({}, acc[bot], {output: {
          high: [highType, hightValue],
          low: [lowType, lowValue]
        }}) :
        { bot, chips: [], output: {
            high: [highType, hightValue],
            low: [lowType, lowValue]
        } };
      return acc;
    }
  }, {}),
  fp.map(fp.split(' ')),
  fp.split('\n')
);

const max = ([a, b]) => a > b ? a : b;
const min = ([a, b]) => a < b ? a : b; 

function calcInitialTodo (state) {
  return _.filter(state, bot => bot.chips.length === 2);
}

const resolveBots = fp.curry((state, todo = calcInitialTodo(state)) => {
  if (todo.length === 0) return state;
  const [currBot] = todo;
  const {chips} = currBot;
  currBot.chips = chips.map(Number);
  currBot.low = min(chips);
  currBot.high = max(chips);
  _.each(currBot.output, (dest, type) => {
    if (dest[0] === 'bot') {
      state[dest[1]].chips.push(currBot[type]);
      if (state[dest[1]].chips.length === 2) {
        todo.push(state[dest[1]]);
      }
    } else {
      state[`o${dest[1]}`] = {id: dest[1], value: currBot[type]};
    }
  });
  return resolveBots(state, todo.slice(1));
});

const solvePart1 = fp.compose(
  console.log,
  fp.prop('bot'),
  fp.prop('0'),
  fp.filter(bot => (bot.low === 17 && bot.high === 61)),
  resolveBots,
  parseData
)

const solvePart2 = fp.compose(
  console.log,
  fp.reduce((total, {value}) => total * value, 1),
  fp.filter(x => +x.id <= 2),
  resolveBots,
  parseData
)

parseData(data);
// solvePart1(data);
// solvePart2(data);
