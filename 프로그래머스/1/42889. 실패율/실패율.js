function solution(N, stages) {
  let answer = [];
  let user = stages.length;

  for (let i = 1; i <= N; i++) {
    let staying = stages.filter((x) => x === i).length;
    console.log(staying);
    answer.push([i, staying / user]);
    user -= staying;
  }
  return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}