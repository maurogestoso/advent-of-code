const { resolveReaction } = require("../helpers");

test("removes all reacting units", () => {
  expect(resolveReaction("aA".split(""))).toEqual("".split(""));
  expect(resolveReaction("abBA".split(""))).toEqual("".split(""));
  expect(resolveReaction("abAB".split(""))).toEqual("abAB".split(""));
  expect(resolveReaction("aabAAB".split(""))).toEqual("aabAAB".split(""));
  expect(resolveReaction("dabAcCaCBAcCcaDA".split(""))).toEqual(
    "dabCBAcaDA".split("")
  );
});
