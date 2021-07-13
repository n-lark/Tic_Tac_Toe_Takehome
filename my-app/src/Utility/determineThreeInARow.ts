type SquareType = {
  x: boolean;
  o: boolean;
};

export const determineThreeInARow = (
  squaresArray: Array<Array<SquareType>>
) => {
  const winningRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const flatArray = squaresArray.flat();
  let won = false;
  let winner = "";

  for (let i = 0; i < winningRows.length; i++) {
    const [a, b, c] = winningRows[i];
    if (flatArray[a].x && flatArray[b].x && flatArray[c].x) {
      won = true;
      winner = "x";
    }
    if (flatArray[a].o && flatArray[b].o && flatArray[c].o) {
      won = true;
      winner = "o";
    }
  }
  return { won, winner };
};
