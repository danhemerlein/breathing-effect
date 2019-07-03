import React, { Component } from "react";
import { Link } from "react-router-dom";

import debounce from "utils/debounce";
import './NotFound.scss'

export default class NotFound extends Component {
  setHeight = () => {
    const notFound = document.querySelector('.NotFound');

    const nfHeight = (window.innerHeight);

    notFound.style.height = nfHeight + "px";
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
      <div className="NotFound headline-serif flex flex-col w100 items-center justify-center flex-column">
        <h3>This is a 404 error. Please check the url in your browser &nbsp;</h3>
        <h3 className="mt2">You might want to <Link to="/">Return Home</Link></h3>
      </div>
    )
  }
}
