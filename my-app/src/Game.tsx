import styled from "styled-components";
import React, { useState, useContext } from "react";
import { SquaresContext } from "./Context/SquaresContext";

type GridType = {
  rowLength: number;
};

export const Game: React.FC = () => {
  const [xTurn, setXTurn] = useState<boolean>(true);
  const { squaresGrid, rowLength } = useContext(SquaresContext);

  console.log(squaresGrid, rowLength, xTurn);

  return (
    <StyledWrapper>
      <StyledGrid rowLength={rowLength}>
        {squaresGrid.map((square, row) => {
          return square.map((piece, column) => {
            return (
              <StyledDiv key={column} onClick={() => setXTurn(!xTurn)}>
                {!piece.x && !piece.o && <StyledBlankSpan />}
              </StyledDiv>
            );
          });
        })}
      </StyledGrid>
    </StyledWrapper>
  );
};

// const StyledButton = styled.button`
//   color: #595959;
//   font-size: 20px;
//   padding: 10px 16px;
//   border: 1px solid lightgray;
//   background-color: white;
//   border-radius: 8px;
//   outline: none;
//   font-family: "Work Sans", sans-serif;
// `;

// const StyledLink = styled(Link)`
//   margin: auto;
//   border-radius: 10px;
// `;

const StyledBlankSpan = styled.span`
  width: 30px;
  height: 30px;
`;

const StyledDiv = styled.div`
  border: 0.5px solid lightgrey;
  color: #595959;
  box-shadow: inset 1px 1px grey;
`;

const StyledGrid = styled.div<GridType>`
  display: grid;
  grid-template-columns: repeat(
    ${({ rowLength }) => rowLength},
    minmax(0, 30px)
  );
  border: 0.5px solid lightgray;
  > div {
    height: 30px;
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
  height: 600px;
  font-family: "Work Sans", sans-serif;
`;
