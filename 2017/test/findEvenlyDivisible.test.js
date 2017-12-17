const {expect} = require('chai');
const {findEvenlyDivisible} = require('../helpers');

describe('findEvenlyDivisible', () => {
  it('returns the only two divisible numbers in a row', () => {
    let row, expected;
    row = [5, 9, 2, 8];
    expected = [8, 2];
    expect(findEvenlyDivisible(row)).to.eql(expected);
    
    row = [9, 4, 7, 3];
    expected = [9, 3];
    expect(findEvenlyDivisible(row)).to.eql(expected);
    
    row = [3, 8, 6, 5];
    expected = [6, 3];
    expect(findEvenlyDivisible(row)).to.eql(expected);
  })
});

