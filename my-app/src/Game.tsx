import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircle, faPaw } from "@fortawesome/free-solid-svg-icons";
import { SquaresContext } from "./Context/SquaresContext";
import { DifficultyLevelContext } from "./Context/DifficultyLevelContext";
import { TimerContext } from "./Context/TimerContext";
import { HighScoreAndGamesWonContext } from "./Context/HighScoreAndGamesWonContext";
import { isCatsScratch } from "./Utility/isCatsScratch";
import { Timer } from "./Timer";
import { HighScore } from "./HighScore";
import { determineThreeInARow } from "./Utility/determineThreeInARow";
import { determineFourInARow } from "./Utility/determineFourInARowr";
import { determineFiveInARow } from "./Utility/determineFiveInARow";

type GridType = {
  rowLength: number;
};

type RowColumnType = {
  rowIndex: number;
  columnIndex: number;
  rowLength: number;
};

type IconType = {
  time: number;
  color: string;
};

export const Game: React.FC = () => {
  const [xTurn, setXTurn] = useState<boolean>(true);
  const [catsScratch, setCatsScratch] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [gameLost, setGameLost] = useState<boolean>(false);
  const { squaresGrid, generateSquaresGrid, rowLength, markX, markO } =
    useContext(SquaresContext);
  const { levelHard } = useContext(DifficultyLevelContext);
  const { timer, incrementTimer } = useContext(TimerContext);
  const { numOfGamesWon, determineHighScoreAndGamesWon } = useContext(
    HighScoreAndGamesWonContext
  );

  useEffect(() => {
    const gameTimer = setInterval(() => {
      incrementTimer();
    }, 1000);

    if (catsScratch || gameWon || gameLost) {
      clearInterval(gameTimer);
    }

    return () => {
      clearInterval(gameTimer);
    };
  }, [incrementTimer, catsScratch, gameWon, gameLost]);

  useEffect(() => {
    if (
      rowLength === 3 &&
      determineThreeInARow(squaresGrid).won &&
      determineThreeInARow(squaresGrid).winner === "x"
    ) {
      return setGameWon(true);
    }
    if (
      rowLength === 3 &&
      determineThreeInARow(squaresGrid).won &&
      determineThreeInARow(squaresGrid).winner === "o"
    ) {
      return setGameLost(true);
    }

    if (
      rowLength === 4 &&
      determineFourInARow(squaresGrid).won &&
      determineFourInARow(squaresGrid).winner === "x"
    ) {
      return setGameWon(true);
    }
    if (
      rowLength === 4 &&
      determineFourInARow(squaresGrid).won &&
      determineFourInARow(squaresGrid).winner === "o"
    ) {
      return setGameLost(true);
    }

    if (
      rowLength === 5 &&
      determineFiveInARow(squaresGrid).won &&
      determineFiveInARow(squaresGrid).winner === "x"
    ) {
      return setGameWon(true);
    }
    if (
      rowLength === 5 &&
      determineFiveInARow(squaresGrid).won &&
      determineFiveInARow(squaresGrid).winner === "o"
    ) {
      return setGameLost(true);
    }

    if (isCatsScratch(squaresGrid)) {
      return setCatsScratch(true);
    }
    if (!xTurn) {
      markO(levelHard);
      setXTurn(!xTurn);
    }
  }, [xTurn, markO, levelHard, squaresGrid, rowLength]);

  return (
    <>
      <StyledWrapper>
        <StyledStatsWrapper>
          <Timer />
          {numOfGamesWon > 0 && <HighScore />}
        </StyledStatsWrapper>
        {catsScratch && (
          <StyledGameVerdictBanner>
            Cat's Scratch{" "}
            <FontAwesomeIcon style={{ color: "lightgrey" }} icon={faPaw} />
          </StyledGameVerdictBanner>
        )}
        {gameWon && (
          <>
            <StyledGameWonBanner>
              Congratulations!{" "}
              <FontAwesomeIcon
                style={{ verticalAlign: "middle" }}
                icon={faTimes}
              />{" "}
              wins!
            </StyledGameWonBanner>
            <StyledInlineWrapper>
              <StyledIcon time={5} color={"#cc3d3d"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
              <StyledIcon time={4} color={"#f28888"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
              <StyledIcon time={3.5} color={"#fae757"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
              <StyledIcon time={3} color={"#6cad68"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
              <StyledIcon time={6} color={"#56b0c4"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
              <StyledIcon time={4.2} color={"#c697e8"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
              <StyledIcon time={6} color={"#f5bfef"}>
                <FontAwesomeIcon icon={faTimes} />
              </StyledIcon>
            </StyledInlineWrapper>
          </>
        )}
        {gameLost && (
          <StyledGameVerdictBanner>
            <FontAwesomeIcon
              style={{ color: "#595959", verticalAlign: "middle" }}
              icon={faCircle}
            />{" "}
            wins!
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
                      !xTurn ||
                      catsScratch ||
                      gameWon ||
                      gameLost
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
          <StyledButton
            data-cy="new-game"
            onClick={() => {
              determineHighScoreAndGamesWon(timer, gameWon);
              generateSquaresGrid(3, 9);
            }}
          >
            New Game
          </StyledButton>
        </StyledLink>
      </StyledWrapper>
    </>
  );
};

function flicker() {
  return keyframes`
    15% {
      opacity: 2;
      color: #f28888; 
    }
    30% {
      opacity: 2;
      color: #fae757; 
    }
    45% {
      opacity: 2;
      color: #6cad68; 
    }
    60% {
      opacity: 2;
      color: #56b0c4; 
    }
    75% {
      opacity: 2;
      color: #c697e8; 
    }
    90% {
      opacity: 2;
      color: #f5bfef; 
    }
  `;
}

const StyledStatsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledGameWonBanner = styled.div`
  color: #cc3d3d;
  font-size: 36px;
  padding-top: 25px;
  position: fixed;
  animation: ${flicker} 5s linear infinite;
`;

const StyledInlineWrapper = styled.div`
  display: inline-block;
`;

const animation = keyframes`
  0% { top: -12px; }
  100% { top: 600px; }
`;

const StyledIcon = styled.span<IconType>`
  color: ${({ color }) => color};
  position: relative;
  top: 0;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  z-index: 2;
  animation: ${animation} ${({ time }) => time}s linear infinite;
`;

const StyledButton = styled.button`
  color: #595959;
  font-size: 20px;
  padding: 10px 16px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 8px;
  outline: none;
  font-family: "Raleway", sans-serif;
`;

const StyledLink = styled(Link)`
  border-radius: 10px;
  margin-bottom: 15px;
`;

const StyledGameVerdictBanner = styled.div`
  font-size: 34px;
  color: #595959;
  padding-top: 15px;
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
  font-family: "Raleway", sans-serif;
`;
