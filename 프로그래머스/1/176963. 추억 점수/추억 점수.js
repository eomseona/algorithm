function solution(name, yearning, photo) {
  const len = photo.length;
  let map = new Map();
  answer = new Array(len).fill(0);

  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  for (let i = 0; i < len; i++) {
    let amount = 0;
    photo[i].map((key) => {
      amount += map.get(key) || 0;
    });
    answer[i] = amount;
  }

  return answer;
}