const fs = require("fs");
const path = require("path");
const { resolveReaction } = require("./helpers");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8").trim();

const solution = resolveReaction(input).length;

console.log({ solution });
