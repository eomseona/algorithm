function solution(s) {
  let stack = [];
  let count = 0;
  [...s].forEach((str) => {
    stack.push(str);

    const same = stack.filter((item) => item === stack[0]);
    const diff = stack.filter((item) => item !== stack[0]);

    if (same.length === diff.length) {
      count += 1;
      stack = [];
    }
  });
  if (stack.length !== 0) {
    count += 1;
  }
  return count;
}