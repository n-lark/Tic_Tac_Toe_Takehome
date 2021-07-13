import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SquaresContextProvider } from "./Context/SquaresContext";
import { DifficultyLevelProvider } from "./Context/DifficultyLevelContext";

ReactDOM.render(
  <React.StrictMode>
    <SquaresContextProvider>
      <DifficultyLevelProvider>
        <App />
      </DifficultyLevelProvider>
    </SquaresContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
