import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { Pizza } from "./components/Pizza";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/Pizza" component={Pizza} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
