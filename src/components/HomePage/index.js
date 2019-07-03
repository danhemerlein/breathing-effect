import React, { Component } from "react";
import cx from 'classnames';

import debounce from "utils/debounce";
import './HomePage.scss'

import SocialModule from 'components/SocialModule';
import Nav from 'components/Nav';
import ArrowIcon from 'components/icons/Arrow';

export default class HomePage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navOpen: false,
    }
  }
  
  
  setHeight = () => {
    const homePage = document.querySelector('.HomePage');

    const hpHeight = (window.innerHeight);

    homePage.style.height = hpHeight + "px";
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

          <h1 className={cx("HomePage__headline text-center color-white")}>The Breathing Effect</h1>

          <div className={cx("HomePage__desktop-socials-container absolute")}>
            <SocialModule></SocialModule>
          </div>

          <div className={cx("flex h100")}>



            <div className={cx("HomePage__arrow-container self-center pointer", { 'HomePage__arrow-container--arrow-not-rotated': this.state.navOpen === true }, { 'HomePage__arrow-container--arrow-rotated': this.state.navOpen === false })}>

              <ArrowIcon
                clickHandler={this.toggleNav}>
              </ArrowIcon>

            </div>
          </div>

          <div className={cx("HomePage__nav-container h100", { 'HomePage__nav-container--show': this.state.navOpen === false }, { 'HomePage__nav-container--hide': this.state.navOpen === true })}>

            <Nav></Nav>

          </div>
         
        </div>
      </div>
    )
  }
}
