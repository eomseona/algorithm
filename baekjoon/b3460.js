const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = input[0];
const numArr = [];
for (let i = 0; i < testCase; i++) {
  numArr.push(input[i + 1]);
}

solution(numArr);

function solution(arr) {
  for (let i = 0; i < testCase; i++) {
    let num = arr[i];
    let digit = 0;
    while (num > 0) {
      if (num % 2 == 1) {
        process.stdout.write(digit + " ");
      }
      num = parseInt(num / 2);
      digit++;
    }
    console.log();
  }
}
