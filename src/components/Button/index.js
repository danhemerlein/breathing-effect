import React, { Component } from "react";

import './Button.scss'

export default class Button extends Component {

  render() {

    return (
      <div className="Button flex items-center justify-center">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer" className="Button__link p2 text-center color-white relative block">{this.props.cta}</a>
      </div>
    )
  }
}
