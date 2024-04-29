function solution(players, callings) {
  const mapByName = new Map();
  const mapByRank = new Map();
  const answer = [];

  players.forEach((name, idx) => {
    mapByName.set(name, idx);
    mapByRank.set(idx, name);
  });

  callings.forEach((player) => {
    const rank = mapByName.get(player);
    const aheadPlayer = mapByRank.get(rank - 1);

    mapByName.set(player, rank - 1);
    mapByName.set(aheadPlayer, rank);

    mapByRank.set(rank, aheadPlayer);
    mapByRank.set(rank - 1, player);
  });

  mapByRank.forEach((v) => {
    answer.push(v);
  });

  return answer;
}