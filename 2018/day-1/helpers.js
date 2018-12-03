const fs = require("fs");
const path = require("path");

exports.parseInput = () =>
  fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf8")
    .trim()
    .split("\n")
    .map(str => Number(str));

exports.calculateFirstRepeatedFrequency = changes => {
  const foundFrequencies = {};
  let foundRepeated = false,
    freq = 0,
    i = 0;

  while (!foundRepeated) {
    i %= changes.length;

    freq += changes[i];

    if (freq in foundFrequencies) {
      foundRepeated = true;
    } else {
      foundFrequencies[freq] = true;
      i++;
    }
  }

  return freq;
};
