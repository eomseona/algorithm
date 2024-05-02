function solution(survey, choices) {
  let type = ["R", "T", "C", "F", "J", "M", "A", "N"];
  let typeIdx = { R: 0, T: 1, C: 2, F: 3, J: 4, M: 5, A: 6, N: 7 };
  let count = [0, 0, 0, 0, 0, 0, 0, 0];

  survey.forEach((c, i) => {
    let num = choices[i];
    const score = num > 4 ? num - 4 : 4 - num;
    const char = num > 4 ? c.charAt(1) : c.charAt(0);
    count[typeIdx[char]] += score;
  });

  let answer = "";
  for (let i = 0; i < count.length; i += 2) {
    if (count[i] > count[i + 1]) answer += type[i];
    else if (count[i] < count[i + 1]) answer += type[i + 1];
    else answer += type[i] < type[i + 1] ? type[i] : type[i + 1];
  }

  return answer;
}