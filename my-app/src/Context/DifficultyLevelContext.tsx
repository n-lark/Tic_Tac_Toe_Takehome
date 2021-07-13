import React, { useState, createContext } from "react";

type DifficultyLevelContextType = {
  levelHard: boolean;
  determineDifficultyLevel: (level: boolean) => void;
};

const DifficultyLevelContextDefaultValues: DifficultyLevelContextType = {
  levelHard: false,
  determineDifficultyLevel: (level: boolean) => {},
};

export const DifficultyLevelContext = createContext<DifficultyLevelContextType>(
  DifficultyLevelContextDefaultValues
);

export const DifficultyLevelProvider: React.FC = ({ children }) => {
  const [levelHard, setLevelHard] = useState<boolean>(
    DifficultyLevelContextDefaultValues.levelHard
  );

  const determineDifficultyLevel = (level: boolean) => setLevelHard(level);

  return (
    <DifficultyLevelContext.Provider
      value={{
        levelHard,
        determineDifficultyLevel,
      }}
    >
      {children}
    </DifficultyLevelContext.Provider>
  );
};
