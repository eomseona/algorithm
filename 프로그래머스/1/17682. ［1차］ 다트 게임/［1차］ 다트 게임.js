function solution(dartResult) {
  let num = dartResult.match(/\d+/g);
  let str = dartResult.match(/\D+/g);
  let score = [0, 0, 0];

  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("S")) score[i] = Number(num[i]);
    if (str[i].includes("D")) score[i] = Number(num[i]) ** 2;
    if (str[i].includes("T")) score[i] = Number(num[i]) ** 3;
    if (str[i].includes("*")) {
      score[i - 1] *= 2;
      score[i] *= 2;
    }
    if (str[i].includes("#")) score[i] *= -1;
  }
  return score.reduce((a, b) => a + b);
}