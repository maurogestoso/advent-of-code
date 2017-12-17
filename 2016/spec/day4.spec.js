const {expect} = require('chai');

const {getTopChars, shiftCipher} = require('../day4');

describe('day 4', () => {
  describe('getTopChars', () => {
    it('is a function', () => {
      expect(getTopChars).to.be.a('function');
    });
    it('returns "abxyz" for "aaaaabbbzyx"', () => {
      expect(getTopChars('aaaaabbbzyx')).to.equal('abxyz');
    });
    it('returns "oarel" for "notarealroom"', () => {
      expect(getTopChars('notarealroom')).to.equal('oarel');
    });
  });
  describe('shiftCipher', () => {
    it('is a function', () => {
      expect(shiftCipher).to.be.a('function');
    });
    it('returns "b" for ("a", 1)', () => {
      expect(shiftCipher('a', 1)).to.equal('b');
    });
    it('returns "b" for ("z", 2)', () => {
      expect(shiftCipher('z', 2)).to.equal('b');
    });
    it('returns " " for ("-", 2)', () => {
      expect(shiftCipher('-', 2)).to.equal(' ');
    });
  });
});
