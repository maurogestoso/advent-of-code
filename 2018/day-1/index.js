const fs = require("fs");

exports.parseInput = path =>
  fs
    .readFileSync(path, "utf8")
    .trim()
    .split("\n")
    .map(str => Number(str));

exports.sumArray = changes => changes.reduce((acc, num) => acc + num, 0);

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
