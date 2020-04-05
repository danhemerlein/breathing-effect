import React, { Component } from "react";

import "./SecondaryButton.scss";

export default class SecondaryButton extends Component {
  render() {
    return (
      <div className="SecondaryButton flex items-center justify-center">
        <a
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="SecondaryButton__link text-center color-white relative block"
        >
          {this.props.cta}
        </a>
      </div>
    );
  }
}
