import React, { Component } from "react";
import { Link } from "react-router-dom";

import cx from 'classnames';

import SocialModule from 'components/SocialModule';
import Nav from 'components/Nav';
import Article from 'components/Article';
import ArrowIcon from 'components/icons/Arrow';

import debounce from "utils/debounce";
import './Press.scss'
import '../HomePage/HomePage.scss'

export default class Press extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  setHeight = () => {
    const press = document.querySelector('.Press');

    const pHeight = (window.innerHeight);

    press.style.height = pHeight + "px";
  }

  debounceAPHeight = () => {
    debounce(this.setHeight(), 100);
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
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

  render() {
    const backgroundImage = {
      backgroundImage: "url(" + this.props.backgroundImage.fields.file.url + ")"
    };

    console.log(this.props.articles);

    return (
      <div className="Press">
        <div style={backgroundImage} className={cx("h100 bg-cover overflow-hidden p2 relative flex flex-col")}>

          <h1 className={cx("HomePage__headline text-center color-white")}>
            <Link to="/">
              The Breathing Effect
            </Link>
          </h1>

          <div className={cx("HomePage__desktop-socials-container absolute")}>
            <SocialModule></SocialModule>
          </div>

          <div className="Press__container self-center w100 flex flex-col items-center justify-center mt4">

            {
              this.props.articles.map((article, key) => {
                console.log(article)
                return (
                  <div key={key} className="Press__article col-6">
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

          <div className={cx("HomePage__arrow-container-container flex h100 absolute", { 'HomePage__arrow-container-container--show-nav': this.state.navOpen === true }, { 'HomePage__arrow-container-container--hide-nav': this.state.navOpen === false })}>

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
