import React, { useContext } from "react";
import styled from "styled-components";
import { formatTime } from "./Utility/formatTime";
import { HighScoreAndGamesWonContext } from "./Context/HighScoreAndGamesWonContext";

const HighScore: React.FC = () => {
  const { highScore } = useContext(HighScoreAndGamesWonContext);

  return <StyledDiv>High Score {formatTime(highScore)}</StyledDiv>;
};

export { HighScore };

const StyledDiv = styled.div`
  text-align: center;
  padding: 20px 20px 10px 20px;
  color: #595959;
  width: 100px;
  font-size: 18px;
`;
