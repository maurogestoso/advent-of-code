const fs = require('fs');
const {expect} = require('chai');
const {Keypad, StarKeypad} = require('../day2');
const data = fs.readFileSync(__dirname + '/../data/day2.txt', 'utf8').split('\n');

describe('day 2', () => {
  describe('Keypad class', () => {
    describe('Keypad.prototype.crackCode()', () => {
      let keypad;
      beforeEach(() => {
        keypad = new Keypad();
      })
      it('is a function', () => {
        expect(Keypad.prototype.crackCode).to.be.a('function');
      });
      it('returns 1 for "LLU"', () => {
        expect(keypad.crackCode(['LLU'])).to.equal('1');
      });
      it('returns 2 for "LLULLLR"', () => {
        expect(keypad.crackCode(['LLULLLR'])).to.equal('2');
      });
      it('returns "23" for ["LLULLLR", "RULUURR"]', () => {
        expect(keypad.crackCode(["LLULLLR", "RULUURR"])).to.equal('23');
      });
      it('returns "236" for ["LLULLLR", "RULUURR", "LLLURRD"]', () => {
        expect(keypad.crackCode(["LLULLLR", "RULUURR", "LLLURRD"])).to.equal('236');
      });
      it('returns "65556" for the challenge input', () => {
        expect(keypad.crackCode(data)).to.equal('65556');
      })
    });
    describe('Keypad.prototype.move', () => {
      let keypad;
      it('is a function', () => {
        expect(Keypad.prototype.move).to.be.a('function');
      });
      it('returns position 2 for a command of "U" and an initial position of 5', () => {
        keypad = new Keypad(); // pos: 5
        expect(keypad.move('U').getButton()).to.equal(2);
      });
      it('returns position 2 for a command of "U" and an initial position of 2', () => {
        keypad = new Keypad([0, 1]); // pos: 2
        expect(keypad.move('U').getButton()).to.equal(2);
      });
      it('returns position 3 for a command of "R" and an initial position of 3', () => {
        keypad = new Keypad([0, 2]); // pos: 3
        expect(keypad.move('R').getButton()).to.equal(3);
      });
      it('returns position 1 for a command of "L" and an initial position of 1', () => {
        keypad = new Keypad([0, 0]); // pos: 1
        expect(keypad.move('L').getButton()).to.equal(1);
      });
    });
  });
  describe('StarKeypad class', () => {
    it('is a function', () => {
      expect(StarKeypad).to.be.a('function');
    });
    describe('StarKeypad.prototype.crackCode', () => {
      let keypad;
      beforeEach(() => {
        keypad = new StarKeypad();
      })
      it('is a function', () => {
        expect(StarKeypad.prototype.crackCode).to.be.a('function');
      });
      it('returns 5 for "LLU"', () => {
        expect(keypad.crackCode(['LLU'])).to.equal('5');
      });
      it('returns 6 for "LLULLLR"', () => {
        expect(keypad.crackCode(['LLULLLR'])).to.equal('6');
      });
      it('returns "64" for ["LLULLLR", "LDLRRRU"]', () => {
        expect(keypad.crackCode(['LLULLLR', 'LDLRRRU'])).to.equal('64');
      });
      it('returns "641" for ["LLULLLR", "LDLRRRU", "RURLURR"]', () => {
        expect(keypad.crackCode(['LLULLLR', 'LDLRRRU', 'RURLURR'])).to.equal('641');
      });
      it('return "CB779" for the challenge input', () => {
        console.log(keypad.crackCode(data));
      })
    });
    describe('StarKeypad.prototype.move', () => {
      let keypad;
      it('is a function', () => {
        expect(StarKeypad.prototype.move).to.be.a('function');
      });
      it('returns position 5 for a command of "U" and an initial position of 5', () => {
        keypad = new StarKeypad(); // pos: 5
        expect(keypad.move('U').getButton()).to.equal(5);
      });
      it('returns position 6 for a command of "R" and an initial position of 5', () => {
        keypad = new StarKeypad(); // pos: 5
        expect(keypad.move('R').getButton()).to.equal(6);
      });
      it('returns position 1 for a command of "U" and an initial position of 1', () => {
        keypad = new StarKeypad({x: 2, y: 0}); // pos: 1
        expect(keypad.move('U').getButton()).to.equal(1);
      });
      it('returns position D for a command of "D" and an initial position of D', () => {
        keypad = new StarKeypad({x: 2, y: 4}); // pos: D
        expect(keypad.move('D').getButton()).to.equal('D');
      });
    });
  });
});

