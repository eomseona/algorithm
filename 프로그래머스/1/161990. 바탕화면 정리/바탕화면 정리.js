function solution(wallpaper) {
  wall = wallpaper.map((w) => w.split(""));
  let [min_x, min_y, max_x, max_y] = [wall.length, wall[0].length, -1, -1];

  wall.forEach((w, i) => {
    let j = w.indexOf("#");
    if (j >= 0) {
      min_x = Math.min(i, min_x);
      max_x = Math.max(i, max_x);
      while (j != -1) {
        min_y = Math.min(j, min_y);
        max_y = Math.max(j, max_y);
        j = w.indexOf("#", j + 1);
      }
    }
  });

  return [min_x, min_y, ++max_x, ++max_y];
}