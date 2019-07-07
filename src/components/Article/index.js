import React, { Component } from "react";
import cx from 'classnames';


import './Article.scss'

export default class Article extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasAuthor: true,
    }
  }

  componentDidMount() {
    if (!this.props.author) {
      this.setState({
        hasAuthor: false,
      })
    }
  }
  
  render() {
    return (
      <div className="Article color-white">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="Article__outlet py1 text-center">
            {this.props.outlet}
          </h3>

          <h3 className="pb_5 pl1 Article__title">{this.props.title}</h3>

          <div className="flex pl1 pb1">
            <h4 className={cx("pr_5", { 'block': this.state.hasAuthor === true }, { 'none': this.state.hasAuthor === false })}>by {this.props.author}</h4>
            <span className={cx("pr_5", { 'block': this.state.hasAuthor === true }, { 'none': this.state.hasAuthor === false })}>|</span>
            <h4 className="">{this.props.date}</h4>
          </div>
        </a>
      </div>
    )
  }
}
