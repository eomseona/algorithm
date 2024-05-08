function solution(ingredient) {
  let idx = 0;
  let count = 0;
  while (ingredient.length >= 4 && idx < ingredient.length - 3) {
    if (
      ingredient[idx] === 1 &&
      ingredient[idx + 1] === 2 &&
      ingredient[idx + 2] === 3 &&
      ingredient[idx + 3] === 1
    ) {
      ingredient.splice(idx, 4);
      count++;
      idx = ingredient.lastIndexOf(1, idx);
    continue;
    } else idx++;
  }
  return count;
}