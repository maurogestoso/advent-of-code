const _ = require('lodash/fp');
const fs = require('fs');

const data = fs.readFileSync('./data/day7.txt', 'utf8');

const parseData = _.compose(
  _.mapValues(_.compose(
    action => action.length === 1 ? action[0] : action,
    _.map(elem => isNaN(+elem) ? elem : +elem)
  )),
  _.reduce(_.curry(Object.assign)({}), {}),
  _.map(_.compose(
    ([action, wire]) => {return {[wire]: action.split(' ')}},
    _.split(' -> ')
  )),
  _.split('\n')
);

const bit = {
  'AND': (a, b) => a & b,
  'OR': (a, b) => a | b,
  'NOT': (a) => ~a + Math.pow(2, 16),
  'LSHIFT': (a, b) => a << b,
  'RSHIFT': (a, b) => a >> b,
}

function signalForWire (wire, signals) {
  if (typeof wire === 'number') return wire;

  const signal = signals[wire];

  if (typeof signal === 'number') return signal;

  if (typeof signal === 'string') return signalForWire(signal, signals);

  if (signal[0] === 'NOT') {
    let [op, a] = signal;
    signals[wire] = bit.NOT(signalForWire(a, signals));
    return signals[wire];
  } 
  
  const [a, op, b] = signal;
  signals[wire] = bit[op](signalForWire(a, signals), signalForWire(b, signals)); 
  return signals[wire];
}

module.exports = {
  parseData, bit, signalForWire
}

console.time('part1');
const signals1 = parseData(data);
const a1 = signalForWire('a', signals1);
console.timeEnd('part1');
console.log(a1);

console.time('part2');
const signals2 = parseData(data);
signals2.b = a1;
const a2 = signalForWire('a', signals2);
console.timeEnd('part2');
console.log(a2);