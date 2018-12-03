const fs = require("fs");
const path = require("path");
const _ = require("lodash/fp");

// #region input
const parsedInput = _.flow(
  pathName => fs.readFileSync(pathName, "utf8"),
  _.trim,
  _.split("\n")
)(path.join(__dirname, "input.txt"));
// #endregion

// #region part 1

const mapToCharCounts = _.map(str =>
  str
    .split("")
    .sort()
    .join("")
    .match(/([a-z])\1+/g)
    .map(str => str.length)
);

const count2sAnd3s = _.reduce(
  (total, curr) => {
    if (curr.includes(2)) total[2]++;
    if (curr.includes(3)) total[3]++;
    return total;
  },
  { 2: 0, 3: 0 }
);

const solvePart1 = _.flow(
  mapToCharCounts,
  count2sAnd3s,
  _.values,
  _.reduce((total, num) => total * num, 1)
);

const solution1 = solvePart1(parsedInput);

console.log({ solution1 });

// #endregion

// #region part 2

const areOnceCharOff = (str1, str2) => {
  return (
    str1.split("").reduce((acc, char1, i) => {
      const char2 = str2[i];
      return char1 === char2 ? acc : acc + 1;
    }, 0) === 1
  );
};

const getCloseWords = words => {
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];

    for (let j = i + 1; j < words.length; j++) {
      const word2 = words[j];

      if (areOnceCharOff(word1, word2)) {
        return { word1, word2 };
      }
    }
  }
};

const getCommonChars = ({ word1, word2 }) => {
  return word1
    .split("")
    .filter((char1, i) => char1 === word2[i])
    .join("");
};

const solvePart2 = _.flow(
  getCloseWords,
  getCommonChars
);

const solution2 = solvePart2(parsedInput);

console.log({ solution2 });

// #endregion
