import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SquaresContext } from "./Context/SquaresContext";
import { DifficultyLevelContext } from "./Context/DifficultyLevelContext";

export const GameStart: React.FC = () => {
  const { generateSquaresGrid } = useContext(SquaresContext);
  const { determineDifficultyLevel } = useContext(DifficultyLevelContext);
  return (
    <StyledWrapper>
      <StyledHeading>Tic Tac Toe</StyledHeading>
      <StyledBy>By Noley Holland</StyledBy>
      <StyledRadioLabel>Grid Size</StyledRadioLabel>
      <StyledRadioWrapper>
        <StyledLabel>
          <StyledInput
            value="easy"
            type="radio"
            name="level"
            onChange={() => generateSquaresGrid(3, 9)}
          />
          Easy (3 x 3 grid)
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            value="medium"
            type="radio"
            name="level"
            onChange={() => generateSquaresGrid(4, 16)}
          />
          Medium (4 x 4 grid)
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            data-cy="chose-level-hard"
            value="hard"
            type="radio"
            name="level"
            onChange={() => generateSquaresGrid(5, 25)}
          />
          Hard (5 x 5 grid)
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

const StyledBy = styled.div`
  font-weight: normal;
  color: lightgrey;
  padding-bottom: 30px;
`;

const StyledHeading = styled.h1`
  font-size: 65px;
  font-weight: normal;
  margin-top: 70px;
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
  height: 600px;
  font-family: "Work Sans", sans-serif;
`;