const fs = require("fs");
const [M, N] = fs
  .readFileSync("baekjoon/test.txt")
  .toString()
  .split("\n")
  .map((v) => +v);

let primeArr = [];

const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution() {
  let sum = 0;
  for (let i = M; i <= N; i++) {
    if (i === 2 || (i % 2 !== 0 && isPrime(i))) {
      primeArr.push(i);
      sum += i;
    }
  }
  if (primeArr.length) {
    console.log(`${sum}\n${primeArr[0]}`);
  } else console.log(-1);
}

solution();
