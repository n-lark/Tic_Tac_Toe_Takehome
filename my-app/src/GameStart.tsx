import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SquaresContext } from "./Context/SquaresContext";
import { DifficultyLevelContext } from "./Context/DifficultyLevelContext";
import { TimerContext } from "./Context/TimerContext";
export const GameStart: React.FC = () => {
  const { generateSquaresGrid } = useContext(SquaresContext);
  const { determineDifficultyLevel } = useContext(DifficultyLevelContext);
  const { resetTimer } = useContext(TimerContext);

  useEffect(() => {
    resetTimer();
  }, [resetTimer]);

  return (
    <StyledWrapper>
      <StyledHeading>Tic Tac Toe</StyledHeading>
      <StyledRadioLabel>Grid Size</StyledRadioLabel>
      <StyledRadioWrapper>
        <StyledLabel>
          <StyledInput
            value="easy"
            type="radio"
            name="level"
            onChange={() => generateSquaresGrid(3, 9)}
          />
          3 in a row (3 x 3 grid)
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            value="medium"
            type="radio"
            name="level"
            onChange={() => generateSquaresGrid(4, 16)}
          />
          4 in a row (4 x 4 grid)
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            data-cy="chose-level-hard"
            value="hard"
            type="radio"
            name="level"
            onChange={() => generateSquaresGrid(5, 25)}
          />
          5 in a row (5 x 5 grid)
        </StyledLabel>
      </StyledRadioWrapper>
      <StyledRadioLabel>Difficulty</StyledRadioLabel>
      <StyledRadioWrapper>
        <StyledLabel>
          <StyledInput
            value="easy"
            type="radio"
            name="difficulty"
            onChange={() => determineDifficultyLevel(false)}
          />
          Easy{" "}
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            value="hard"
            type="radio"
            name="difficulty"
            onChange={() => determineDifficultyLevel(true)}
          />
          Hard
        </StyledLabel>
      </StyledRadioWrapper>
      <StyledLink to="./Game">
        <StyledButton>Play Game</StyledButton>
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledLabel = styled.div`
  color: #595959;
  padding: 5px;
  font-size: 18px;
`;

const StyledRadioLabel = styled.div`
  color: #595959;
  font-weight: bold;
  padding-top: 15px;
  font-size: 18px;
`;

const StyledRadioWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid lightgrey;
  border-radius: 50%; 
  margin-right: 5px;
  appearance:none;
  -moz-appearance: none;
  -webkit-appearance: none;    
  position: relative;
    &:before {
      content: " ";
      position: absolute;
      top: 2px;
      right: 2px;
      bottom: 2px;
      left: 2px;
      border-radius: 100%;
      transition: background .15s; 
    }
    &:checked{
      &:before {
        background-color: lightgrey; 
      }
`;

const StyledHeading = styled.h1`
  font-size: 65px;
  font-weight: normal;
  margin-top: 120px;
  color: #595959;
`;

const StyledButton = styled.button`
  color: #595959;
  font-size: 20px;
  padding: 10px 16px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 8px;
  outline: none;
  font-family: "Work Sans", sans-serif;
`;

const StyledLink = styled(Link)`
  margin: auto;
  border-radius: 10px;
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
