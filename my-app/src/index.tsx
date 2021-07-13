import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SquaresContextProvider } from "./Context/SquaresContext";
import { DifficultyLevelProvider } from "./Context/DifficultyLevelContext";
import { TimerContextProvider } from "./Context/TimerContext";
import { HighScoreAndGamesWonContextProvider } from "./Context/HighScoreAndGamesWonContext";

ReactDOM.render(
  <React.StrictMode>
    <SquaresContextProvider>
      <DifficultyLevelProvider>
        <TimerContextProvider>
          <HighScoreAndGamesWonContextProvider>
            <App />
          </HighScoreAndGamesWonContextProvider>
        </TimerContextProvider>
      </DifficultyLevelProvider>
    </SquaresContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
