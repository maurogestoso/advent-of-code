const fs = require("fs");
const path = require("path");
const _ = require("lodash/fp");

exports.parseInput = () =>
  fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf8")
    .trim()
    .split("\n");

exports.mapToCharCounts = _.map(str =>
  str
    .split("")
    .sort()
    .join("")
    .match(/([a-z])\1+/g)
    .map(str => str.length)
);

exports.count2sAnd3s = _.reduce(
  (total, curr) => {
    if (curr.includes(2)) total[2]++;
    if (curr.includes(3)) total[3]++;
    return total;
  },
  { 2: 0, 3: 0 }
);

exports.areOnceCharOff = (str1, str2) => {
  return (
    str1.split("").reduce((acc, char1, i) => {
      const char2 = str2[i];
      return char1 === char2 ? acc : acc + 1;
    }, 0) === 1
  );
};

exports.getCloseWords = words => {
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];

    for (let j = i + 1; j < words.length; j++) {
      const word2 = words[j];

      if (exports.areOnceCharOff(word1, word2)) {
        return { word1, word2 };
      }
    }
  }
};

exports.getCommonChars = ({ word1, word2 }) => {
  return word1
    .split("")
    .filter((char1, i) => char1 === word2[i])
    .join("");
};
