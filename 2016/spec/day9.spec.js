const {expect} = require('chai');
const {repeatStr, solvePart1, solvePart2} = require('../day9')

describe.only('day9', () => {
  describe('repeat', () => {
    it('is a function', () => {
      expect(repeatStr).to.be.a('function');
    });
    it('returns "aaa" for "a" and 3', () => {
      expect(repeatStr('a', 3)).to.equal('aaa');
    });
    it('returns "b" for "b" and 1', () => {
      expect(repeatStr('b', 1)).to.equal('b');
    });
    it('returns "" for "c" and 0', () => {
      expect(repeatStr('c', 0)).to.equal('');
    });
  });
  describe('solvePart1', () => {
    it('is a function', () => {
      expect(solvePart1).to.be.a('function');
    });
    it('returns "abc" for "abc"', () => {
      expect(solvePart1('abc')).to.equal('abc');
    });
    it('returns "ABBBBBC" for "A(1x5)BC"', () => {
      expect(solvePart1('A(1x5)BC')).to.equal('ABBBBBC');
    });
    it('returns "XYZXYZXYZ" for "(3x3)XYZ"', () => {
      expect(solvePart1('(3x3)XYZ')).to.equal('XYZXYZXYZ');
    });
    it('returns "(1x3)A" for "(6x1)(1x3)A"', () => {
      expect(solvePart1('(6x1)(1x3)A')).to.equal('(1x3)A');
    });
    it('returns "X(3x3)ABC(3x3)ABCY" for "X(8x2)(3x3)ABCY"', () => {
      expect(solvePart1('X(8x2)(3x3)ABCY')).to.equal('X(3x3)ABC(3x3)ABCY');
    });
  });
  describe('solvePart2', () => {
    it('is a function', () => {
      expect(solvePart2).to.be.a('function');
    });
    it('returns "XYZXYZXYZ" for "(3x3)XYZ"', () => {
      expect(solvePart2('(3x3)XYZ')).to.equal('XYZXYZXYZ'.length);
    });
    it('returns "XABCABCABCABCABCABCY" for "X(8x2)(3x3)ABCY"', () => { 
      expect(solvePart2('X(8x2)(3x3)ABCY')).to.equal('XABCABCABCABCABCABCY'.length);
    });
    
    it('returns a length of 445 for "(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN"', () => { 
      expect(solvePart2('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN')).to.equal(445);
    });
    it('returns a length of 241920 for "(27x12)(20x12)(13x14)(7x10)(1x12)A"', () => { 
      expect(solvePart2('(27x12)(20x12)(13x14)(7x10)(1x12)A')).to.equal(241920);
    });
  });
});
