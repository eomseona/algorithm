function solution(lottos, win_nums) {
  const score = [6, 6, 5, 4, 3, 2, 1];

  let min_count = lottos.filter((num) => win_nums.includes(num)).length;
  let zero_count = lottos.filter((num) => num === 0).length;

  const max_count = Math.min(min_count + zero_count, 6);

  return [score[max_count], score[min_count]];
}