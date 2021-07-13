import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faTimes } from "@fortawesome/free-solid-svg-icons";
import { SquaresContext } from "./Context/SquaresContext";

export const NotFoundError: React.FC = () => {
  const { generateSquaresGrid } = useContext(SquaresContext);
  return (
    <StyledWrapper>
      <StyledOopsError data-cy="error-message">
        Oops! Something weird happened. <br />
        Click the button below to start a new game
      </StyledOopsError>
      <StyledIcon>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ fontSize: "64px", color: "#595959" }}
        />
      </StyledIcon>
      <StyledIcon>
        <FontAwesomeIcon
          icon={faPaw}
          style={{ fontSize: "64px", color: "#595959" }}
        />
      </StyledIcon>
      <StyledIcon>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ fontSize: "64px", color: "#595959" }}
        />
      </StyledIcon>
      <StyledLink to="/">
        <StyledButton onClick={() => generateSquaresGrid(3, 9)}>
          New Game
        </StyledButton>
      </StyledLink>
    </StyledWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const StyledIcon = styled.span`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
  padding: 30px;
  font-weight: bold;
`;

const StyledOopsError = styled.div`
  color: #595959;
  font-size: 30px;
  margin: 50px;
  text-align: center;
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
  margin-top: 35px;
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
