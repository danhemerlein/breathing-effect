import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "utils/get";

import './MainView.scss'
import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import Press from 'components/Press';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;

  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" render={() => (

            <HomePage />

          )} />

          <Route exact path="/press" render={() => (

            <Press />

          )} />

          <Route component={NotFound} />

        </Switch>

      </Router>

    </div>
  );
};

export default MainView;
