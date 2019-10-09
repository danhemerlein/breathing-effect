import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import debounce from "utils/debounce";
import './HomePage.scss'

import SocialModule from 'components/SocialModule';
import Nav from 'components/Nav';
import Button from 'components/Button';
import Article from 'components/Article';

import ArrowIcon from 'components/icons/Arrow';
import Hamburger from 'components/icons/Hamburger';

export default class HomePage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       navOpen: false,
    }
  }
  
  setHeightHP = () => {
    const homePage = document.querySelector('.HomePage');

    const pressContainer = document.querySelector('.Press__container');

    const navContainer = document.querySelector('.HomePage__nav-container');

    const arrowContainer = document.querySelector('.HomePage__arrow-container-container');

    const frame = document.querySelector('iframe');

    if (window.innerWidth > 1100) {
      frame.style.height = (pressContainer.offsetHeight - 16) + "px";
      navContainer.style.height = "100vh";
      arrowContainer.style.height = "100vh";
    } else {
      frame.style.height = "350px"; 
      homePage.style.height = "auto";
      navContainer.style.height = "100vh";
      arrowContainer.style.height = "100vh";
    }
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
    });
  }

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    return (
      <div className="HomePage flex w100 ">
        <div style={backgroundImage} className={cx("h100 bg-cover overflow-hidden p2 relative w100")}>
        
            <Link to="/">
              <h1 className={cx("HomePage__headline HomePage__band-name text-center color-white")}>
                  The Breathing Effect
              </h1>
            </Link>

          <div className="HomePage__container flex mt2">

            <div className="HomePage__container--left col-10 md:col-6 mr_5">

              <Button
                href="https://open.spotify.com/artist/4sfL701NAogwKc7mBMWNsy?si=Rwd_dsDfS2qIFz5S08fWPQ"
                cta="listen on spotify"
              ></Button>

              <div className="Homepage__container-iframe col-12 mt1">

                <iframe className="col-12" title="Ocean Cycle (Live in a Liquid House)" src="https://www.youtube.com/embed/jnX6CNER8Ig" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"></iframe>

              </div>
            </div>

            <div className="HomePage__container--right col-10 mt1 cs:mt0 md:col-6 ml_5">

              <Button
                href="https://music.apple.com/us/artist/the-breathing-effect/789870184"
                cta="listen on apple music"
              ></Button>


              <div className="Press__container self-center w100 flex flex-col items-center justify-center">

                {
                  this.props.articles.map((article, key) => {
                    return (
                      <div key={key} className="mt1 col-12">
                        <Article
                          author={article.fields.author}
                          date={article.fields.date}
                          link={article.fields.link}
                          outlet={article.fields.outlet}
                          title={article.fields.title}
                        ></Article>
                      </div>
                    )
                  })
                }

              </div>

            </div>
          
          </div>

          <div className="HomePage__band-image mt2 flex justify-center items-center">

            <img src={this.props.bandImage.fields.file.url} alt={this.props.bandImage.fields.file.title} className="col-11" />

          </div>

          <div className={cx("HomePage__desktop-socials-container")}>
            <SocialModule></SocialModule>
          </div>

          <div className={cx("HomePage__arrow-container-container flex h100 absolute none cs:block", { 'HomePage__arrow-container-container--show-nav': this.state.navOpen === true }, {'HomePage__arrow-container-container--hide-nav': this.state.navOpen === false })}>

            <div className={cx("HomePage__arrow-container self-center pointer", { 'HomePage__arrow-container--arrow-not-rotated': this.state.navOpen === false }, { 'HomePage__arrow-container--arrow-rotated': this.state.navOpen === true })}>

              <ArrowIcon
                clickHandler={this.toggleNav}
              >
              </ArrowIcon>

            </div>

          </div>

          <div className={cx("HomePage__hamburger-icon absolute block cs:none")}>

              <Hamburger
                clickHandler={this.toggleNav}
              >
              </Hamburger>

          </div>

          <div className={cx("HomePage__nav-container h100", { 'HomePage__nav-container--show': this.state.navOpen === true }, { 'HomePage__nav-container--hide': this.state.navOpen === false })}>

            <Nav
              clickHandler={this.toggleNav}
            ></Nav>

          </div>
         
        </div>
      </div>
    )
  }
}
