const generateSpiral = (maxN) => {
  const spiral = {1: {x: 0, y: 0}};
  const dirs = [{x: 1, y: 0}, {x: 0, y: -1}, {x: -1, y: 0}, {x: 0, y: 1}];
  let n = 1, di = 0, width = 1, height = 1, x = 0, y = 0
  
  while (n <= maxN) {
    let steps = dirs[di].x ? Math.abs(dirs[di].x * width) : Math.abs(dirs[di].y * height);
    while (steps) {
      n++;
      if (n === 6) debugger;
      x += dirs[di].x
      width += dirs[di].x ? 1 : 0;
      y += dirs[di].y
      height += dirs[di].y ? 1 : 0;
      spiral[n] = {x, y}
      steps--;
    }
    di++
    di %= 4
  }

  return spiral;
}

console.log(generateSpiral(23)[23]);
