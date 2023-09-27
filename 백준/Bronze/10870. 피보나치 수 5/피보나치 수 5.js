const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const n = Number(input);

function solution(num) {
  let Fibo = [];
  Fibo[0] = 0;
  Fibo[1] = 1;
  for (let i = 2; i < num + 1; i++) {
    let element = Fibo[i - 1] + Fibo[i - 2];
    Fibo[i] = element;
  }
  return Fibo[num];
}

console.log(solution(n));
