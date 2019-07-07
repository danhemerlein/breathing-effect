import React, { Component } from "react";
import cx from 'classnames';

import './Show.scss'

export default class Show extends Component {

  render() {
    return (
      <div className="Show color-white flex flex-col lg:flex-row justify-between">
        <a href={this.props.ticketLink} target="_blank" rel="noopener noreferrer" className="flex col-12 lg:col-8 items-center">

          <div className="pl0 lg:pl2 flex flex-col lg:flex-row col-12 lg:wauto pt1 lg:pt0">

            <p className="mr1 bold col-12 lg:wauto text-center lg:text-left">{this.props.date}</p>

            <p className="col-12 lg:wauto text-center lg:text-left pt1 lg:pt0">{this.props.venue}</p>     

          </div>

        </a>

        <a href={this.props.ticketLink} target="_blank" rel="noopener noreferrer" className="flex col-12 lg:col-4 items-center">

          <div className="flex w100 justify-between items-center flex-col lg:flex-row pt1 lg:pt0">

            <p className="mr_5">{this.props.city}</p> 
            <div className="p1">
              <div className="Show__get-tickets p1 bg-color-black">get tickets</div>    
            </div>

          </div>

        </a>

      </div>
    )
  }
}
