function solution(record) {
  let action = [];
  let nameMap = {};
  let stateMap = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  let answer = [];

  for (const r of record) {
    let [state, id, nick] = r.split(" ");
    if (state !== "Change") action.push([id, state]);
    if (nick) nameMap[id] = nick;
  }

  return action.map(([id, state]) => `${nameMap[id]}${stateMap[state]}`);
}