import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import './NavToggle.scss'

export default class NavToggle extends Component {

  render() {

    return (
      <div className="NavToggle h100 ml2">
        <span className="NavToggle__bar bg-color-white fixed"></span>
        <span className="NavToggle__bar bg-color-white mt_5 fixed"></span>
        <span className="NavToggle__bar bg-color-white mt1 fixed"></span>
      </div>
    )
  }
}
