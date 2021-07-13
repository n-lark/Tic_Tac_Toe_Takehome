type SquareType = {
  x: boolean;
  o: boolean;
};

export const isCatsScratch = (squares: Array<Array<SquareType>>): boolean => {
  let unClickedSquares: Array<SquareType> = [];

  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
      if (!squares[i][j].o && !squares[i][j].x) {
        unClickedSquares.push(squares[i][j]);
      }
    }
  }

  if (unClickedSquares.length === 0) {
    return true;
  }
  return false;
};
