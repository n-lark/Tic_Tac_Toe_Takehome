import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SquaresContextProvider } from "./Context/SquaresContext";

ReactDOM.render(
  <React.StrictMode>
    <SquaresContextProvider>
      <App />
    </SquaresContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
