import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Nav.scss'

export default class Nav extends Component {

  render() {

    return (
      <div className="Nav col-12 h100 bg-color-white flex items-center jusity-center p4">
        <ul className="w100">

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

          {/* <li className="text-right mb1">
            <Link to="/tour">
              tour
            </Link>
          </li> */}

          {/* <li className="text-right mb1">
            <Link to="/media">
              media
            </Link>
          </li> */}

          <li className="text-right">
            <a href="mailto:breathingeffect@gmail.com">email us</a>
          </li>

        </ul>

      </div>
    )
  }
}
