function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  skill_trees.forEach((tree) => {
    let s = [...skill];
    for (let i = 0; i < tree.length; i++) {
      if (!skill.includes(tree[i])) continue;
      if (s.shift() !== tree[i]) {
        answer -= 1;
        break;
      }
    }
  });

  return answer;
}