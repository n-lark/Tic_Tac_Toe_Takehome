import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GameStart } from "./GameStart";
import { Game } from "./Game";
import { NotFoundError } from "./NotFoundError";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <GameStart />
        </Route>
        <Route exact path="/Game">
          <Game />
        </Route>
        <Route render={() => <NotFoundError />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
