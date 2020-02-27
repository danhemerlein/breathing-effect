import React, { Component } from "react";
import { Link } from "react-router-dom";

import CloseIcon from 'components/icons/Close';

import './Nav.scss'

export default class Nav extends Component {

  render() {

    return (
      <div className="Nav col-12 h100 bg-color-white flex items-center jusity-center relative">

        <div className="Nav__close-icon col-2 absolute">
          <CloseIcon
            clickHandler={this.props.clickHandler}
          ></CloseIcon>
        </div>

        <ul className="w100 p4">

          <li className="text-right mb1">
            <Link to="/">
              home
            </Link>
          </li>

          <li className="text-right mb1">
            <Link to="/press">
              press
            </Link>
          </li>

          <li className="text-right">
            <a href="mailto:breathingeffect@gmail.com">email us</a>
          </li>

        </ul>

      </div>
    )
  }
}
