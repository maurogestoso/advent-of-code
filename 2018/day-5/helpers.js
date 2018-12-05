exports.resolveReaction = polymer => {
  let skipNext, result, changes;
  do {
    const units = polymer;
    result = [];
    changes = false;
    units.forEach((unit, i) => {
      if (skipNext) {
        skipNext = false;
        return;
      }
      if (i === units.length - 1) {
        result.push(unit);
        return;
      }

      const next = units[i + 1];

      if (doTheyReact(unit, next)) {
        skipNext = true;
        changes = true;
        return;
      }

      result.push(unit);
    });
    if (changes) polymer = result;
  } while (changes);
  return result;
};

function doTheyReact(a, b) {
  if (!a || !b) return false;
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32;
}

exports.filterOutUnit = (char, polymer) =>
  polymer.filter(unit => !(unit === char || unit === char.toUpperCase()));
