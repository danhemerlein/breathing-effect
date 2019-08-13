import React, { Component } from "react";

export default class Hamburger extends Component {
  render() {
    return (

      <svg onClick={this.props.clickHandler} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 40" x="0px" y="0px">
      <path d="M1.158 3.441c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0zM1.158 14.858c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0zM1.158 26.275c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0z" /></svg>

    )
  }
}