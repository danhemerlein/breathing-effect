import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import debounce from "utils/debounce";
import './HomePage.scss'

import SocialModule from 'components/SocialModule';
import Nav from 'components/Nav';
import Button from 'components/Button';
import ArrowIcon from 'components/icons/Arrow';

export default class HomePage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navOpen: false,
    }
  }
  
  setHeightHP = () => {
    const homePage = document.querySelector('.HomePage');

    const hpHeight = (window.innerHeight);

    homePage.style.height = hpHeight + "px";
  }

  debounceHPHeight = () => {
    debounce(this.setHeightHP(), 100);
  }

  componentDidMount() {
    this.setHeightHP();
    window.addEventListener("resize", this.debounceHPHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceHPHeight);
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    return (
      <div className="HomePage">
        <div style={backgroundImage} className={cx("h100 bg-cover overflow-hidden p2 relative")}>

          <h1 className={cx("HomePage__headline text-center color-white")}>
            <Link to="/">
              The Breathing Effect
            </Link>
          </h1>

          <div className={cx("HomePage__desktop-socials-container absolute")}>
            <SocialModule></SocialModule>
          </div>

          <div className={cx("HomePage__desktop-button-container absolute")}>
            <Button></Button>
          </div>

          <div className={cx("HomePage__arrow-container-container flex h100 absolute", { 'HomePage__arrow-container-container--show-nav': this.state.navOpen === true }, {'HomePage__arrow-container-container--hide-nav': this.state.navOpen === false })}>

            <div className={cx("HomePage__arrow-container self-center pointer", { 'HomePage__arrow-container--arrow-not-rotated': this.state.navOpen === false }, { 'HomePage__arrow-container--arrow-rotated': this.state.navOpen === true })}>

              <ArrowIcon
                clickHandler={this.toggleNav}>
              </ArrowIcon>

            </div>
          </div>

          <div className={cx("HomePage__nav-container h100", { 'HomePage__nav-container--show': this.state.navOpen === true }, { 'HomePage__nav-container--hide': this.state.navOpen === false })}>

            <Nav></Nav>

          </div>
         
        </div>
      </div>
    )
  }
}
