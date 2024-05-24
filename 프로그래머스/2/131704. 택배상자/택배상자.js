function solution(order) {
  let answer = 0;
  let stack = [];

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    while (stack.length !== 0 && stack.at(-1) === order[answer]) {
      stack.pop();
      answer++;
    }
  }

  return answer;
}