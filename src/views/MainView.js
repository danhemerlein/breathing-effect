import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "utils/get";

import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import Press from 'components/Press';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  console.log(model);
  return (
    <div className="">
      <Router>

        <Switch>

          <Route exact path="/" render={() => (

            <HomePage 
              backgroundImage={get(model, "fields.backgroundImage", {})}
            />

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
