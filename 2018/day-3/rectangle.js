module.exports = class Rectangle {
  constructor({ id, left, top, width, height }) {
    this.id = id;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  forEach(iteratee) {
    for (let i = this.left; i < this.left + this.width; i++) {
      for (let j = this.top; j < this.top + this.height; j++) {
        const key = `${i},${j}`;
        iteratee(key, this);
      }
    }
  }
};
