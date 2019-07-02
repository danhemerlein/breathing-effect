import React, { Component } from "react";

import debounce from "utils/debounce";
import './HomePage.scss'

export default class HomePage extends Component {
  setHeight = () => {
    const homePage = document.querySelector('.HomePage');

    const hpHeight = (window.innerHeight);

    homePage.style.height = hpHeight + "px";
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
      <div className="HomePage">
        <h1>this is the homepage</h1>
      </div>
    )
  }
}
