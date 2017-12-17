const {expect} = require('chai');

const {parseData, bit, signalForWire} = require('../day7');

describe('day 7', () => {
  describe('bitwise operations', () => {
    describe('#AND', () => {
      it('is a function', () => {
        expect(bit.AND).to.be.a('function');
      });
      it('returns 72 for 123 and 456', () => {
        expect(bit.AND(123, 456)).to.equal(72);
      });
    });
    describe('#OR', () => {
      it('is a function', () => {
        expect(bit.OR).to.be.a('function');
      });
      it('returns 507 for 123 and 456', () => {
        expect(bit.OR(123, 456)).to.equal(507);
      });
    });
    describe('#NOT', () => {
      it('is a function', () => {
        expect(bit.NOT).to.be.a('function');
      });
      it('returns 65535 for 0', () => {
        expect(bit.NOT(0)).to.equal(65535);
      });
      it('returns 65534 for 1', () => {
        expect(bit.NOT(1)).to.equal(65534);
      });
      it('returns 65533 for 2', () => {
        expect(bit.NOT(2)).to.equal(65533);
      });
      it('returns 65412 for 123', () => {
        expect(bit.NOT(123)).to.equal(65412);
      });
      it('returns 65079 for 456', () => {
        expect(bit.NOT(456)).to.equal(65079);
      });
    });
    describe('#LSHIFT', () => {
      it('is a function', () => {
        expect(bit.LSHIFT).to.be.a('function');
      });
      it('returns 492 for 123 and 2', () => {
        expect(bit.LSHIFT(123, 2)).to.equal(492);
      });
    });
    describe('#RSHIFT', () => {
      it('is a function', () => {
        expect(bit.RSHIFT).to.be.a('function');
      });
      it('returns 114 for 456 and 2', () => {
        expect(bit.RSHIFT(456, 2)).to.equal(114);
      });
    });
  });
});
