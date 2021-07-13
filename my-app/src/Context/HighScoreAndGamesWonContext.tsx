import React, { useState, createContext } from "react";

type HighScoreAndGamesWonContextType = {
  highScore: number;
  numOfGamesWon: number;
  determineHighScoreAndGamesWon: (time: number, gameWon: boolean) => void;
};

const HighScoreAndGamesWonContextDefaultValues: HighScoreAndGamesWonContextType =
  {
    highScore: 1000000000000,
    numOfGamesWon: 0,
    determineHighScoreAndGamesWon: (time: number, gameWon: boolean) => {},
  };

export const HighScoreAndGamesWonContext =
  createContext<HighScoreAndGamesWonContextType>(
    HighScoreAndGamesWonContextDefaultValues
  );

export const HighScoreAndGamesWonContextProvider: React.FC = ({ children }) => {
  const [highScore, setHighScore] = useState<number>(
    HighScoreAndGamesWonContextDefaultValues.highScore
  );
  const [numOfGamesWon, setNumOfGamesWon] = useState<number>(
    HighScoreAndGamesWonContextDefaultValues.numOfGamesWon
  );

  const determineHighScoreAndGamesWon = (time: number, gameWon: boolean) => {
    if (time < highScore && gameWon) {
      setHighScore(time);
      setNumOfGamesWon((numOfGamesWon) => (numOfGamesWon += 1));
    }
  };

  return (
    <HighScoreAndGamesWonContext.Provider
      value={{
        numOfGamesWon,
        highScore,
        determineHighScoreAndGamesWon,
      }}
    >
      {children}
    </HighScoreAndGamesWonContext.Provider>
  );
};
