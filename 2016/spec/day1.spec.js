const {expect} = require('chai');
const {calcBlockDistance} = require('../day1');

describe('calcBlockDistance()', () => {
  it('is a function', () => {
    expect(calcBlockDistance).to.be.a('function');
  });
  describe('part 1', () => {
    it('should return 1 for R1 or L1', () => {
      expect(calcBlockDistance(['R1']).part1).to.equal(1);
    });
    it('should return 2 for [R1, L1]', () => {
      expect(calcBlockDistance(['R1', 'L1']).part1).to.equal(2);
    });
    it('should return 4 for ["R3", "L1"]', () => {
      expect(calcBlockDistance(['R3', 'L1']).part1).to.equal(4);
    });
    it('should return 0 for "L3, L3, L3, L3"', () => {
      expect(calcBlockDistance("L3, L3, L3, L3".split(', ')).part1).to.equal(0);
    });
    it('should return 4 for ["L3", "R1"]', () => {
      expect(calcBlockDistance(['L3', 'R1']).part1).to.equal(4);
    });
    it('should return 3 for "R2, L1, R2, R1, R1, L3, R6"', () => {
      expect(calcBlockDistance('R2, L1, R2, R1, R1, L3, R6'.split(', ')).part1).to.equal(6);
    });
    it('should return 3 for "R2, L1, R2, R1, R1, L3, R6, R0, R2, L1, R2, R1, R1, L3, R6"', () => {
      expect(calcBlockDistance('R2, L1, R2, R1, R1, L3, R6, R0, R2, L1, R2, R1, R1, L3, R6'.split(', ')).part1).to.equal(12);
    });
  });
  describe('part 2', () => {
    
  });
});
