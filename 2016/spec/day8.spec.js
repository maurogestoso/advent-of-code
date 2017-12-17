const {expect} = require('chai');

const modifyDisplay = require('../day8');

describe('day8', () => {
  describe('modifyDisplay', () => {
    it('is a function', () => {
      expect(modifyDisplay).to.be.a('function');
    });
    it('correctly draws a 3x2 rectangle on the display array', () => {
      const display = ['.......', '.......', '.......'].map(str => str.split(''));
      const expectedDisplay = ['###....', '###....', '.......'].map(str => str.split(''));
      const args = 'rect 3x2'.split(' ');
      expect(modifyDisplay(display, args)).to.eql(expectedDisplay);
    });
    it('correctly draws a 8x4 rectangle on the display array', () => {
      const display = ['.......', '.......', '.......'].map(str => str.split(''));
      const expectedDisplay = ['#######', '#######', '#######'].map(str => str.split(''));
      const args = 'rect 8x4'.split(' ');
      expect(modifyDisplay(display, args)).to.eql(expectedDisplay);
    });
    it('rotates a row correctly', () => {
      const display = ['#.#....', '###....', '.#.....'].map(str => str.split(''));
      const expectedDisplay = ['#....#.', '###....', '.#.....'].map(str => str.split(''));
      const args = 'rotate row y=0 by 5'.split(' ');
      expect(modifyDisplay(display, args)).to.eql(expectedDisplay);
    });
    it('rotates a column correctly', () => {
      const display = ['###....', '###....', '.......'].map(str => str.split(''));
      const expectedDisplay = ['#.#....', '###....', '.#.....'].map(str => str.split(''));
      const args = 'rotate column x=1 by 1'.split(' ');
      expect(modifyDisplay(display, args)).to.eql(expectedDisplay);
    });
  });
});
