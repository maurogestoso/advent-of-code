const {expect} = require('chai');

const {isAbba, isValidPair, findAbaPair} = require('../day7');

describe('day7', () => {
  describe('isAbba', () => {
    it('is a function', () => {
      expect(isAbba).to.be.a('function');
    });
    it('correctly determines if a 4 character string is an ABBA', () => {
      expect(isAbba('abba')).to.be.true;
      expect(isAbba('cddc')).to.be.true;
      expect(isAbba('aaaa')).to.be.false;
      expect(isAbba('abcd')).to.be.false;
    });
    it('finds an ABBA in a string of length larger than 4', () => {
      expect(isAbba('xxxabbaxxx')).to.be.true;
    });
  });
  describe('isValidPair', () => {
    it('is a function', () => {
      expect(isValidPair).to.be.a('function');
    });
    it('correctly determines a valid pair [abba, !abba]', () => {
      expect(isValidPair({outside: ['aaaa', 'abba'], inside: ['aaaa', 'bbbb']})).to.be.true;
      expect(isValidPair({outside: ['bbbb', 'abba'], inside: ['aaaa', 'abba']})).to.be.false;
    });
  });
  describe('findAbaPair', () => {
    it('is a function', () => {
      expect(findAbaPair).to.be.a('function');
    });
    it('correctly finds an Aba pair', () => {
      expect(findAbaPair(['aaa', 'kek'], 'eke')).to.be.true;
      expect(findAbaPair(['aaa', 'bzb'], 'zaz')).to.be.false;
      expect(findAbaPair(['aaa', 'bzb'], 'zbz')).to.be.true;
    });
  });
});
