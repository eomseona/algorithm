const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const N = input[0];
const K = input[1];

solution(N, K);

function solution(N, K) {
  let divisor = [];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisor.push(i);
    }
  }
  if (divisor.length < K) {
    console.log(0);
  } else {
    console.log(divisor[K - 1]);
  }
}
