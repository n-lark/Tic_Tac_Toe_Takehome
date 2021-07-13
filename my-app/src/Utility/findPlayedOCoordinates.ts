type SquareType = {
  x: boolean;
  o: boolean;
};

export const findPlayedOCoordinates = (
  squaresGrid: Array<Array<SquareType>>
) => {
  const oCoordinates: Array<Array<number>> = [];

  squaresGrid.forEach((square, row) => {
    square.forEach((piece, column) => {
      if (piece.o) {
        oCoordinates.push([row, column]);
      }
    });
  });

  return oCoordinates;
};
