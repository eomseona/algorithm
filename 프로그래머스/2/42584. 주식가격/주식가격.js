function solution(prices) {
  let answer = [];
  prices.map((price, i) => {
    let idx = prices.length - i - 1;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < price) {
        idx = j - i;
        break;
      }
    }
    answer.push(idx);
  });

  return answer;
}