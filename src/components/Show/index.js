import React, { Component } from "react";
import cx from 'classnames';

import './Show.scss'

export default class Show extends Component {

  render() {
    return (
      <div className="Show color-white flex justify-between">
        <a href={this.props.ticketLink} target="_blank" rel="noopener noreferrer" className="flex col-8 items-center">

          <div className="pl2 flex">

            <p className="mr1 bold">{this.props.date}</p>     
            <p>{this.props.venue}</p>     

          </div>

        </a>

        <a href={this.props.ticketLink} target="_blank" rel="noopener noreferrer" className="flex col-4 items-center">

          <div className="flex w100 justify-between items-center">

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
