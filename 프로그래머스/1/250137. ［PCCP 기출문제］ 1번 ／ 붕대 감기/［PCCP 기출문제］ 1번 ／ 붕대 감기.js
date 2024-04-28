function solution(bandage, health, attacks) {
  let timeFlow = 0;
  const [t, x, y] = bandage;
  let healthNow = health;
  let succeedCount = 0;

  for (let i = 0; i < attacks.length; i++) {
    const [sec, damage] = attacks[i];
    while (timeFlow !== sec) {
      succeedCount++;
      //연속 성공인 경우
      if (succeedCount === t) {
        // y양을 더했을 때 최대 체력을 넘지 않도록 변수 조작
        if (healthNow + y > health) healthNow = health;
        // 추가 체력 부여
        else healthNow += y;
        succeedCount = 0;
      }

      if (healthNow + x <= health) {
        // 초당 기본 체력 부여
        healthNow += x;
      } else {
        healthNow = health;
      }
      timeFlow++;
    }
    //몬스터의 공격이 들어온 경우
    healthNow -= damage;
    succeedCount = 0;
    timeFlow++;
    if (healthNow <= 0) return -1;
  }
  return healthNow;
}