import React, { useState, createContext } from "react";
import { getRandomUnusedIndex } from "../Utility/getRandomUnusedIndex";
import { findPlayedOCoordinates } from "../Utility/findPlayedOCoordinates";
import { calculateNextOMove } from "../Utility/calculateNextOMove";

type SquareType = {
  x: boolean;
  o: boolean;
};

type SquaresContextType = {
  squaresGrid: Array<Array<SquareType>>;
  rowLength: number;
  generateSquaresGrid: (rowLength: number, totalSquares: number) => void;
  markX: (xTurn: boolean, row: number, column: number) => void;
  markO: (levelHard: boolean) => void;
};

const SquaresContextDefaultValues: SquaresContextType = {
  squaresGrid: [
    [
      { x: false, o: false },
      { x: false, o: false },
      { x: false, o: false },
    ],
    [
      { x: false, o: false },
      { x: false, o: false },
      { x: false, o: false },
    ],
    [
      { x: false, o: false },
      { x: false, o: false },
      { x: false, o: false },
    ],
  ],
  rowLength: 3,
  generateSquaresGrid: (rowLength: number, totalSquares: number) => {},
  markX: (xTurn: boolean, row: number, column: number) => {},
  markO: (levelHard: boolean) => {},
};

export const SquaresContext = createContext<SquaresContextType>(
  SquaresContextDefaultValues
);

export const SquaresContextProvider: React.FC = ({ children }) => {
  const [squaresGrid, setSquaresGrid] = useState<Array<Array<SquareType>>>(
    SquaresContextDefaultValues.squaresGrid
  );
  const [rowLength, setRowLength] = useState<number>(3);

  const generateSquaresGrid = (rowLength: number, totalSquares: number) => {
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

  const markX = (xTurn: boolean, row: number, column: number) => {
    const updatedSquares = squaresGrid.map((square, r) => {
      return square.map((piece, c) => {
        if (squaresGrid[row][column] === piece && xTurn) {
          piece.x = true;
        }
        if (squaresGrid[row][column] === piece && !xTurn) {
          piece.o = true;
        }
        return piece;
      });
    });
    setSquaresGrid(updatedSquares);
  };

  const markO = (levelHard: boolean) => {
    if (!levelHard) {
      const flatArray = squaresGrid.flat();
      const randomIndex = getRandomUnusedIndex(flatArray);

      const generatedSquares: Array<Array<SquareType>> = [];
      let tempArrayBuilder: Array<SquareType> = [];

      flatArray.forEach((piece, index) => {
        if (index === randomIndex) {
          piece.o = true;
        }
        tempArrayBuilder.push(piece);
        if (tempArrayBuilder.length === rowLength) {
          generatedSquares.push(tempArrayBuilder);
          tempArrayBuilder = [];
        }
      });

      setSquaresGrid(generatedSquares);
    }
    if (levelHard) {
      const oPlayedMoves = findPlayedOCoordinates(squaresGrid);

      console.log("O Has Played:", oPlayedMoves);

      if (oPlayedMoves.length === 0) {
        console.log("FIRST");
        let played = false;
        const squaresGridWithOFirstMove = squaresGrid.map((square) => {
          return square.map((piece) => {
            if (!piece.x && !played) {
              piece.o = true;
              played = true;
            }
            return piece;
          });
        });
        return setSquaresGrid(squaresGridWithOFirstMove);
      }

      if (oPlayedMoves.length > 0) {
        console.log("SECOND");
        const squaresGridWithOMove = calculateNextOMove(
          squaresGrid,
          oPlayedMoves
        );
        return setSquaresGrid(squaresGridWithOMove);
      }
    }
  };

  return (
    <SquaresContext.Provider
      value={{
        rowLength,
        squaresGrid,
        generateSquaresGrid,
        markX,
        markO,
      }}
    >
      {children}
    </SquaresContext.Provider>
  );
};
