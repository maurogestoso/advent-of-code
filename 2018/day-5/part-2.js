const fs = require("fs");
const path = require("path");
const { filterOutUnit, resolveReaction } = require("./helpers");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8").trim();

function main(input) {
  const polymer = input.split("");

  const finalLengths = polymer.reduce((acc, unit) => {
    const key = unit.toLowerCase();
    if (acc[key]) return acc;

    acc[key] = resolveReaction(filterOutUnit(key, polymer)).length;
    return acc;
  }, {});

  return Object.values(finalLengths).reduce((min, curr) => {
    return curr < min ? curr : min;
  }, Infinity);
}

console.time("solution");
console.log(main(input));
console.timeEnd("solution");
