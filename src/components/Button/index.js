import React, { Component } from "react";

import cx from 'classnames';

import './Button.scss'

export default class Button extends Component {

  render() {

    return (
      <div className="Button flex items-center justify-center">
        <a href="https://open.spotify.com/artist/4sfL701NAogwKc7mBMWNsy?si=Rwd_dsDfS2qIFz5S08fWPQ" target="_blank" rel="noopener noreferrer" className="Button__link p2 text-center">listen on spotify</a>
      </div>
    )
  }
}
