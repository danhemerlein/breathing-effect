import React, { Component } from "react";

export default class Close extends Component {
  render() {
    return (

      <svg onClick={this.props.clickHandler} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" space="preserve"><path d="M44.8,54.8" /><g><g><g><path d="M50.2,87.6c-20.7,0-37.6-16.8-37.6-37.6s16.8-37.6,37.6-37.6s37.5,16.8,37.5,37.6S70.9,87.6,50.2,87.6z M50.2,15.6     c-19,0-34.4,15.4-34.4,34.4s15.4,34.4,34.4,34.4S84.6,69,84.6,50S69.2,15.6,50.2,15.6z" /></g></g><g><g><rect x="48.6" y="30.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.6923 50.1458)" width="3.1" height="39.8" /></g><g><rect x="30.3" y="48.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.6918 50.1455)" width="39.8" height="3.1" /></g></g></g></svg>
      
    )
  }
}
