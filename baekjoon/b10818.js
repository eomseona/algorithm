const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = +input[0];
const strArr = input[1].split(" ");
const numArr = [];
for (let i = 0; i < testCase; i++) {
  numArr.push(+strArr[i]);
}

solution(numArr);

function solution(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < testCase; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(min + " " + max);
}
