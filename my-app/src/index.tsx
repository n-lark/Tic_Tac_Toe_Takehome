import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SquaresContextProvider } from "./Context/SquaresContext";
import { DifficultyLevelProvider } from "./Context/DifficultyLevelContext";
import { TimerContextProvider } from "./Context/TimerContext";

ReactDOM.render(
  <React.StrictMode>
    <SquaresContextProvider>
      <DifficultyLevelProvider>
        <TimerContextProvider>
          <App />
        </TimerContextProvider>
      </DifficultyLevelProvider>
    </SquaresContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
