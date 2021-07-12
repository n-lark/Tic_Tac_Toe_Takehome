import React, { useState, createContext } from "react";

type SquareType = {
  x: boolean;
  o: boolean;
};

type SquaresContextType = {
  squaresGrid: Array<Array<SquareType>>;
  rowLength: number;
  GenerateSquaresGrid: (rowLength: number, totalSquares: number) => void;
};

const SquaresContextDefaultValues: SquaresContextType = {
  squaresGrid: [
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
    [{ x: false, o: false }],
  ],
  rowLength: 3,
  GenerateSquaresGrid: (rowLength: number, totalSquares: number) => {},
};

export const SquaresContext = createContext<SquaresContextType>(
  SquaresContextDefaultValues
);

export const SquaresContextProvider: React.FC = ({ children }) => {
  const [squaresGrid, setSquaresGrid] = useState<Array<Array<SquareType>>>(
    SquaresContextDefaultValues.squaresGrid
  );
  const [rowLength, setRowLength] = useState<number>(3);

  const GenerateSquaresGrid = (rowLength: number, totalSquares: number) => {
    const generatedSquares = [];
    let tempArrayBuilder = [];
    for (let i = 0; i < totalSquares; i++) {
      tempArrayBuilder.push({ x: false, o: false });
      if (tempArrayBuilder.length === rowLength) {
        generatedSquares.push(tempArrayBuilder);
        tempArrayBuilder = [];
      }
    }
    setSquaresGrid(generatedSquares);
    setRowLength(rowLength);
  };

  return (
    <SquaresContext.Provider
      value={{
        rowLength,
        squaresGrid,
        GenerateSquaresGrid,
      }}
    >
      {children}
    </SquaresContext.Provider>
  );
};
