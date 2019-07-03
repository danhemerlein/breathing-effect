import React, { Component } from 'react';

import './styles/app.scss';

import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
