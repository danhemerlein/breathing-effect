import cx from 'classnames'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Article from '../../components/Article'
import ArrowIcon from '../../components/icons/Arrow'
import Hamburger from '../../components/icons/Hamburger'
import Nav from '../../components/Nav'
import SocialModule from '../../components/SocialModule'
import { debounce } from '../../utils/debounce'
import '../HomePage/HomePage.scss'
import './Press.scss'

export default class Press extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
      tallContent: false,
    })
  }

  setHeightPP = () => {
    const press = document.querySelector('.Press')
    const pcContainer = document.querySelector('.Press__container')
    const pHeight = window.innerHeight

    // height of Articles plus height of title
    const heightToCompare = pcContainer.offsetHeight + 144

    if (heightToCompare > window.innerHeight) {
      press.style.height = 'auto'
    } else {
      press.style.height = pHeight + 'px'
    }
  }

  debouncePPHeight = () => {
    debounce(this.setHeightPP(), 100)
  }

  componentDidMount() {
    this.setHeightPP()

    window.addEventListener('resize', this.debouncePPHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncePPHeight)
  }

  render() {
    const backgroundImage = {
      backgroundImage:
        'url(' + this.props.backgroundImage.fields.file.url + ')',
      // backgroundAttachment: "fixed",
    }

    return (
      <div className='Press'>
        <div
          onClick={this.toggleNav}
          className={cx('HomePage__nav-overlay p0 m0', {
            'HomePage__nav-overlay--active': this.state.navOpen,
          })}
        ></div>

        <div
          style={backgroundImage}
          className={cx(
            'h100 bg-cover overflow-hidden p2 relative flex flex-col'
          )}
        >
          <h1 className={cx('HomePage__headline text-center color-white')}>
            <Link to='/'>The Breathing Effect</Link>
          </h1>

          <div className={cx('HomePage__desktop-socials-container absolute')}>
            <SocialModule></SocialModule>
          </div>

          <div className='Press__container self-center w100 flex flex-col items-center justify-center mt4'>
            {this.props.articles.map((article, key) => {
              return (
                <div key={key} className='Press__article col-9 lg:col-6'>
                  <Article
                    author={article.fields.author}
                    date={article.fields.date}
                    link={article.fields.link}
                    outlet={article.fields.outlet}
                    title={article.fields.title}
                  ></Article>
                </div>
              )
            })}
          </div>

          <div
            className={cx(
              'HomePage__arrow-container-container flex h100 absolute none cs:block',
              {
                'HomePage__arrow-container-container--show-nav':
                  this.state.navOpen === true,
              },
              {
                'HomePage__arrow-container-container--hide-nav':
                  this.state.navOpen === false,
              }
            )}
          >
            <div
              className={cx(
                'HomePage__arrow-container mt2 self-center pointer',
                {
                  'HomePage__arrow-container--arrow-not-rotated':
                    this.state.navOpen === false,
                },
                {
                  'HomePage__arrow-container--arrow-rotated':
                    this.state.navOpen === true,
                }
              )}
            >
              <ArrowIcon clickHandler={this.toggleNav}></ArrowIcon>
            </div>
          </div>

          <div
            className={cx('HomePage__hamburger-icon absolute block cs:none')}
          >
            <Hamburger clickHandler={this.toggleNav}></Hamburger>
          </div>

          <div
            className={cx(
              'HomePage__nav-container h100',
              { 'HomePage__nav-container--show': this.state.navOpen === true },
              { 'HomePage__nav-container--hide': this.state.navOpen === false }
            )}
          >
            <Nav clickHandler={this.toggleNav}></Nav>
          </div>
        </div>
      </div>
    )
  }
}
