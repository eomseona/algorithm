function solution(N, stages) {
  let stay = {};
  let percent = {};
  let user = stages.length;
  for (let i = 1; i <= N; i++) {
    stay[i] = stages.filter((num) => num === i).reduce((acc) => (acc += 1), 0);
  }
  for (let i = 1; i <= N; i++) {
    percent[i] = stay[i] / user;
    user -= stay[i];
  }
  let answer = Array.from(Object.entries(percent))
    .sort((a, b) => b[1] - a[1])
    .map((v) => +v[0]);

  return answer;
}