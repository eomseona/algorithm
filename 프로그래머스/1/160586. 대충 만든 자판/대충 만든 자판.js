function solution(keymap, targets) {
  var answer = [];
  let press = new Map();
  for (const keys of keymap) {
    [...keys].forEach((key, idx) => {
      press.get(key) === undefined
        ? press.set(key, idx + 1)
        : press.set(key, Math.min(press.get(key), idx + 1));
    });
  }
  for (const target of targets) {
    answer.push(
      target.split("").reduce((acc, char) => (acc += press.get(char)), 0) || -1
    );
  }
  return answer;
}