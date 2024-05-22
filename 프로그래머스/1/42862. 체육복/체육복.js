function solution(n, lost, reserve) {
  let sortedLost = lost
    .filter((l) => !reserve.includes(l))
    .sort((a, b) => a - b);
  let sortedReserve = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);

  let answer = n - sortedLost.length;

  for (let i = 0; i < sortedLost.length; i++) {
    let lostNum = sortedLost[i];
    for (let j = 0; j < sortedReserve.length; j++) {
      let reserveNum = sortedReserve[j];
      if (reserveNum === lostNum - 1 || reserveNum === lostNum + 1) {
        answer += 1;
        sortedReserve[j] = -1;
        break;
      }
    }
  }
    return answer;
}