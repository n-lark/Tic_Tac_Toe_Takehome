type SquareType = {
  x: boolean;
  o: boolean;
};

export const determineFiveInARowForFiveByFive = (
  squaresArray: Array<Array<SquareType>>
) => {
  const winningRows = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [4, 8, 12, 16, 20],
    [0, 6, 12, 18, 24],
  ];
  const flatArray = squaresArray.flat();
  let won = false;
  let winner = "";

  for (let i = 0; i < winningRows.length; i++) {
    const [a, b, c, d, e] = winningRows[i];
    if (
      flatArray[a].x &&
      flatArray[a].x === flatArray[b].x &&
      flatArray[a].x === flatArray[c].x &&
      flatArray[a].x === flatArray[d].x &&
      flatArray[a].x === flatArray[e].x
    ) {
      won = true;
      winner = "x";
    }
    if (
      flatArray[a].o &&
      flatArray[a].o === flatArray[b].o &&
      flatArray[a].o === flatArray[c].o &&
      flatArray[a].o === flatArray[d].o &&
      flatArray[a].o === flatArray[e].o
    ) {
      won = true;
      winner = "o";
    }
  }
  return { won, winner };
};
