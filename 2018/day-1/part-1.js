const { parseInput } = require("./helpers");

const parsedInput = parseInput();

const main = changes => changes.reduce((acc, num) => acc + num, 0);

console.log(main(parsedInput));
