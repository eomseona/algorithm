/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const lefts = new Map([
    ["(", 0],
    ["[", 1],
    ["{", 2],
  ]);
  const rights = new Map([
    [")", 0],
    ["]", 1],
    ["}", 2],
  ]);
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (lefts.has(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const lastLeft = stack.pop();
      if (lefts.get(lastLeft) !== rights.get(char)) {
        return false;
      }
    }
  }
    return stack.length === 0;
};

console.log(isValid("(]"));
