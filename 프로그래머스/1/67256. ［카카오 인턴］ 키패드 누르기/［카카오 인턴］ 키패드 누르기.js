function solution(numbers, hand) {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const handMap = { 1: "L", 4: "L", 7: "L", 3: "R", 6: "R", 9: "R" };
  let left = [3, 0];
  let right = [3, 2];
  let result = "";

  numbers.forEach((num) => {
    const letter = handMap[`${num}`];
    if (Object.keys(handMap).includes(`${num}`)) {
      result += handMap[`${num}`];
      keyPad.map((_, i) => {
        keyPad.map((_, j) => {
          if (keyPad[i][j] === num)
            letter === "L" ? (left = [i, j]) : (right = [i, j]);
        });
      });
    } else {
      keyPad.map((_, i) => {
        keyPad.map((_, j) => {
          let diff_left = Math.abs(i - left[0]) + Math.abs(j - left[1]);
          let diff_right = Math.abs(i - right[0]) + Math.abs(j - right[1]);
          if (keyPad[i][j] === num) {
            if (diff_left < diff_right) {
              result += "L";
              left = [i, j];
            } else if (diff_left > diff_right) {
              result += "R";
              right = [i, j];
            } else {
              if (hand === "right") {
                result += "R";
                right = [i, j];
              } else {
                result += "L";
                left = [i, j];
              }
            }
          }
        });
      });
    }
  });
  return result;
}