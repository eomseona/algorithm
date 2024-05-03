function solution(board, moves) {
  let stack = [];
  let pop = 0;

  moves.forEach((move) => {
    let column = move - 1;

    for (let row = 0; row < board.length; row++) {
      if (board[row][column] === 0) continue;
      else {
        if (stack[stack.length - 1] === board[row][column]) {
          stack.pop();
          pop += 2;
        } else {
          stack.push(board[row][column]);
        }
        board[row][column] = 0;
        break;
      }
    }
  });

  return pop;
}