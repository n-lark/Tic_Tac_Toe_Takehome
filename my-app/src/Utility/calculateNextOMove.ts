type SquareType = {
  x: boolean;
  o: boolean;
};

export const calculateNextOMove = (
  squaresGrid: Array<Array<SquareType>>,
  oPlayedMoves: Array<Array<number>>
): Array<Array<SquareType>> => {
  const x = [-1, -1, -1, 0, 0, 1, 1, 1];
  const y = [-1, 0, 1, -1, 1, -1, 0, 1];
  let played = false;

  if (oPlayedMoves.length === 0) {
    let randomPlay = false;
    const squaresGridWithRandomMove = squaresGrid.map((square) => {
      return square.map((piece) => {
        if (!piece.x && !piece.o && !randomPlay) {
          piece.o = true;
          randomPlay = true;
        }
        return piece;
      });
    });
    return squaresGridWithRandomMove;
  }

  x.forEach((r, i) => {
    let rowCurrent = oPlayedMoves[0][0] + r;
    let columnCurrent = oPlayedMoves[0][1] + y[i];
    if (
      rowCurrent > -1 &&
      rowCurrent < squaresGrid.length &&
      columnCurrent > -1 &&
      columnCurrent < squaresGrid.length
    ) {
      if (
        !squaresGrid[rowCurrent][columnCurrent].x &&
        !played &&
        !squaresGrid[rowCurrent][columnCurrent].o
      ) {
        squaresGrid[rowCurrent][columnCurrent].o = true;
        played = true;
      }
    }
  });
  if (!played) {
    return calculateNextOMove(squaresGrid, oPlayedMoves.slice(1));
  }

  return squaresGrid;
};
