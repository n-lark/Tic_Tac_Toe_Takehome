import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle, faPaw } from "@fortawesome/free-solid-svg-icons";
import { SquaresContext } from "./Context/SquaresContext";
import { DifficultyLevelContext } from "./Context/DifficultyLevelContext";
import { isCatsScratch } from "./Utility/isCatsScratch";

type GridType = {
  rowLength: number;
};

type RowColumnType = {
  rowIndex: number;
  columnIndex: number;
  rowLength: number;
};

export const Game: React.FC = () => {
  const [xTurn, setXTurn] = useState<boolean>(true);
  const [catsScratch, setCatsScratch] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const { squaresGrid, generateSquaresGrid, rowLength, markX, markO } =
    useContext(SquaresContext);
  const { levelHard } = useContext(DifficultyLevelContext);

  useEffect(() => {
    // if (rowLength === 3 && determineThreeInARow()) {
    //   return setGameWon(true);
    // }
    // if (rowLength > 3 && determineFourInARow()) {
    //   return setGameWon(true);
    // }
    if (isCatsScratch(squaresGrid)) {
      return setCatsScratch(true);
    }
    if (!xTurn) {
      markO(levelHard);
      setXTurn(!xTurn);
    }
  }, [xTurn, markO, levelHard, squaresGrid, rowLength]);

  return (
    <StyledWrapper>
      {catsScratch && (
        <StyledGameVerdictBanner>
          Cats Scratch{" "}
          <FontAwesomeIcon style={{ color: "lightgrey" }} icon={faPaw} />
        </StyledGameVerdictBanner>
      )}
      <StyledGrid rowLength={rowLength}>
        {squaresGrid.map((square, row) => {
          return square.map((piece, column) => {
            return (
              <StyledDiv
                key={column}
                rowIndex={row}
                columnIndex={column}
                rowLength={rowLength}
                onClick={() => {
                  if (
                    squaresGrid[row][column].x ||
                    squaresGrid[row][column].o ||
                    !xTurn
                  ) {
                    return null;
                  }
                  if (xTurn) {
                    markX(xTurn, row, column);
                    setXTurn(!xTurn);
                  }
                }}
              >
                {piece.x && (
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ fontSize: "48px" }}
                  />
                )}
                {piece.o && (
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ fontSize: "48px" }}
                  />
                )}
              </StyledDiv>
            );
          });
        })}
      </StyledGrid>
      <StyledLink to="/">
        <StyledButton onClick={() => generateSquaresGrid(3, 9)}>
          New Game
        </StyledButton>
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledButton = styled.button`
  color: #595959;
  font-size: 20px;
  padding: 10px 16px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 8px;
  outline: none;
`;

const StyledLink = styled(Link)`
  border-radius: 10px;
  margin-bottom: 15px;
`;

const StyledGameVerdictBanner = styled.div`
  font-size: 34px;
  color: #595959;
  padding-top: 25px;
  position: fixed;
`;

const StyledDiv = styled.div<RowColumnType>`
  border-right: ${({ columnIndex, rowLength }) =>
    columnIndex === rowLength - 1 ? "none" : "2px solid lightgrey"};
  border-left: ${({ columnIndex }) =>
    columnIndex === 0 ? "none" : "2px solid lightgrey"};
  border-top: ${({ rowIndex }) =>
    rowIndex === 0 ? "none" : "2px solid lightgrey"};
  border-bottom: ${({ rowIndex, rowLength }) =>
    rowIndex === rowLength - 1 ? "none" : "2px solid lightgrey"};
  color: #595959;
`;

const StyledGrid = styled.div<GridType>`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(
    ${({ rowLength }) => rowLength},
    minmax(0, 90px)
  );
  > div {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  border: 1px solid lightgray;
  box-shadow: 10px 5px 5px lightgray;
  margin: 10px;
  width: 700px;
  height: 700px;
  font-family: "Work Sans", sans-serif;
`;
