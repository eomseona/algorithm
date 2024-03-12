const fs = require("fs");
const input = fs.readFileSync("baekjoon/test.txt").toString().split("\n");

const station = 10;
let max = 0;
let people = 0;

solution(input);

function solution(arr) {
  for (let i = 0; i < station; i++) {
    let [off, on] = arr[i].split(" ");
    people -= +off;
    people += +on;
    if (max < people) max = people;
  }
  console.log(max);
}
