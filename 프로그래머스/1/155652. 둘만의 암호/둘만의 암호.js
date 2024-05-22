function solution(s, skip, index) {
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g")
  );

  return s
    .split("")
    .map((c) => matched[(matched.indexOf(c) + index) % matched.length])
    .join("");
}