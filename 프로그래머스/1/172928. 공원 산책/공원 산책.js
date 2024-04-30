function solution(park, routes) {
  let height = park.length;
  let width = park[0].split("").length;
  let directionMap = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
  let parkTable = new Array();
  let start = [0, 0];

  park.forEach((p, i) => {
    parkTable.push(p.split(""));
    const idx = p.indexOf("S");
    if (idx >= 0) {
      start = [i, idx];
    }
  });

  routes.forEach((route) => {
    const [direction, steps] = route.split(" ");
    const [moveY, moveX] = directionMap[direction];
    const endY = moveY * steps + start[0];
    const endX = moveX * steps + start[1];
    let go = true;
    for (let i = 1; i <= steps; i++) {
      if (
        (parkTable[start[0] + moveY * i]?.[start[1] + moveX * i] ?? "X") === "X"
      ) {
        go = false;
        break;
      }
      if (endY >= height || endX >= width) {
        go = false;
        break;
      }
    }
    if (go) {
      start = [endY, endX];
    }
  });

  return start;
}