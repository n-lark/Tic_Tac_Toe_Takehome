import React, { useContext } from "react";
import styled from "styled-components";
import { formatTime } from "./Utility/formatTime";
import { TimerContext } from "./Context/TimerContext";

const Timer: React.FC = () => {
  const { timer } = useContext(TimerContext);

  return <StyledDiv data-cy="timer">{formatTime(timer)}</StyledDiv>;
};

export { Timer };

const StyledDiv = styled.div`
  align-self: flex-end;
  padding: 20px 20px 10px 20px;
  color: #595959;
  width: 75px;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
`;
