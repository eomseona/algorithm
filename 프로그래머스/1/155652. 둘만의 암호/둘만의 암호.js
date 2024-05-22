function solution(s, skip, index) {
  let answer = "";
  let arr = s.split("");

  arr.forEach((item) => {
    let ascii = item.charCodeAt();
    for (let i = 0; i < index; i++) {
      ascii++;
      if (ascii > 122) ascii = 97;
      while (skip.includes(String.fromCharCode(ascii))) {
        ascii++;
        if (ascii > 122) ascii = 97;
      }
    }
    answer = answer + String.fromCharCode(ascii);
  });

  return answer;
}
