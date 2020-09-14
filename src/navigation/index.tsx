import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "components/Home/Home";
import ROUTES from "./routes";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
      </Switch>
    </Router>
  );
};
