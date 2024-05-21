function solution(X, Y) {
  let answer = "";
  const hashX = new Array(10).fill(0);
  const hashY = new Array(10).fill(0);

  X.split("").forEach((item) => hashX[item]++);
  Y.split("").forEach((item) => hashY[item]++);

  hashX.forEach((x, i) => {
    if (x && hashY[i]) {
      answer += String(i).repeat(Math.min(hashX[i], hashY[i]));
    }
  });
  if (answer !== "" && +answer === 0) return "0";
  return answer.length ? [...answer].reverse().join("") : "-1";
}