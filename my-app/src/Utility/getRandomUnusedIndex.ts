type SquareType = {
  x: boolean;
  o: boolean;
};

export const getRandomUnusedIndex = (flatArray: Array<SquareType>): number => {
  const max = flatArray.length - 1;
  const min = 0;
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

  if (flatArray[randomIndex].x || flatArray[randomIndex].o) {
    return getRandomUnusedIndex(flatArray);
  }

  return randomIndex;
};
