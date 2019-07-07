import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "utils/get";

import HomePage from 'components/HomePage';
import NotFound from 'components/NotFound';
import Press from 'components/Press';
import Live from 'components/Live';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, something went wrong!</h1>;
  let homePage = [];
  let pressPieces = [];
  let shows = [];
  console.log(model);
  for (let i = 0; i < model.length; i++) {
    const element = model[i];
    if ('backgroundImage' in element.fields) {
      homePage = element;
    }
    if ('outlet' in element.fields) {
      pressPieces.push(element);
    }
    if ('venue' in element.fields) {
      shows.push(element);
    }
  }

  return (
    <div className="">
      <Router>

        <Switch>

          <Route exact path="/" render={() => (

            <HomePage 
              backgroundImage={get(homePage, "fields.backgroundImage", {})}
            />

          )} />

          <Route exact path="/press" render={() => (

            <Press 
              backgroundImage={get(homePage, "fields.backgroundImage", {})}
              articles={pressPieces}
            />

          )} />

          <Route exact path="/tour" render={() => (

            <Live
              backgroundImage={get(homePage, "fields.backgroundImage", {})}
              shows={shows}
            />

          )} />

          <Route component={NotFound} />

        </Switch>

      </Router>

    </div>
  );
};

export default MainView;
