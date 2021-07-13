type SquareType = {
  x: boolean;
  o: boolean;
};

export const determineFourInARowForFourByFour = (
  squaresArray: Array<Array<SquareType>>
) => {
  const winningRows = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];
  const flatArray = squaresArray.flat();
  let won = false;
  let winner = "";

  for (let i = 0; i < winningRows.length; i++) {
    const [a, b, c, d] = winningRows[i];
    if (
      flatArray[a].x &&
      flatArray[a].x === flatArray[b].x &&
      flatArray[a].x === flatArray[c].x &&
      flatArray[a].x === flatArray[d].x
    ) {
      won = true;
      winner = "x";
    }
    if (
      flatArray[a].o &&
      flatArray[a].o === flatArray[b].o &&
      flatArray[a].o === flatArray[c].o &&
      flatArray[a].o === flatArray[d].o
    ) {
      won = true;
      winner = "o";
    }
  }
  return { won, winner };
};
