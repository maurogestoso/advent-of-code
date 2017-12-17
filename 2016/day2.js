const _ = require('lodash');

function Keypad (pos = [1, 1]) {
  this.numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  this.pos = pos;
}

Keypad.prototype.getButton = function () {
  return this.numbers[this.pos[0]][this.pos[1]];
};

Keypad.prototype.move = function (command) {
  const movements = {
    'U': [-1, 0],
    'D': [1, 0],
    'R': [0, 1],
    'L': [0, -1]
  };
  const move = movements[command];
  const newX = this.pos[0] + move[0];
  const newY = this.pos[1] + move[1]; 
  const newPos = [
    newX > 2 || newX < 0 ? this.pos[0] : newX, 
    newY > 2 || newY < 0 ? this.pos[1] : newY,
  ];
  this.pos = newPos;
  return this;
}

Keypad.prototype.crackCode = function (lines) {
  return _.reduce(lines, (acc, line) => {
    const commands = line.split('');
    _.each(commands, (command) => {
      this.move(command);
    });
    return acc + this.getButton();
  }, '');
};

function StarKeypad (pos = {x: 0, y: 2}) {
  this.keys = [
    [null, null, 1, null, null],
    [null, 2, 3, 4, null],
    [5, 6, 7, 8, 9],
    [null, 'A', 'B', 'C', null],
    [null, null, 'D', null, null]
  ]
  this.pos = pos;
}

StarKeypad.prototype.move = function (command) {
  const movements = {
    'U': {x: 0, y: -1},
    'D': {x: 0, y: 1},
    'R': {x: 1, y: 0},
    'L': {x: -1, y: 0}
  };
  const newX = Math.clip(this.pos.x + movements[command].x, 0, 4);
  const newY = Math.clip(this.pos.y + movements[command].y, 0, 4);
  if (this.keys[newY][newX] !== null) {
    this.pos = {x: newX, y: newY};
  }
  return this;
};

StarKeypad.prototype.crackCode = function (lines) {
  return _.reduce(lines, (code, line) => {
    const commands = line.split('');
    _.each(commands, (command) => {
      this.move(command);
    });
    return code + this.getButton();
  }, '');
}

StarKeypad.prototype.getButton = function () {
  return this.keys[this.pos.y][this.pos.x];
};

Math.clip = function (n, min, max) {
  return Math.max(min, Math.min(n, max));
};

module.exports = {Keypad, StarKeypad};
