import React, { Component } from "react";

import debounce from "utils/debounce";
import './Press.scss'

export default class Press extends Component {
  setHeight = () => {
    const press = document.querySelector('.Press');

    const pHeight = (window.innerHeight);

    press.style.height = pHeight + "px";
  }

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  }

  componentDidMount() {
    this.setHeight();

    window.addEventListener("resize", () => {
      this.setHeight();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setHeight);
  }

  render() {
    
    return (
      <div className="Press">
        <h1>this is the Press component</h1>
      </div>
    )
  }
}
