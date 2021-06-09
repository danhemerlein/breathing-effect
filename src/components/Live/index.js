import cx from 'classnames'
import ArrowIcon from 'components/icons/Arrow'
import Nav from 'components/Nav'
import Show from 'components/Show'
import SocialModule from 'components/SocialModule'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from 'utils/debounce'
import '../HomePage/HomePage.scss'
import './Live.scss'

export default class live extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  setHeightLP = () => {
    const live = document.querySelector('.Live')
    const lContainer = document.querySelector('.Live__container')
    const lHeight = window.innerHeight

    // height of Articles plus height of title
    const heightToCompare = lContainer.offsetHeight + 144

    if (heightToCompare > window.innerHeight) {
      live.style.height = 'auto'
    } else {
      live.style.height = lHeight + 'px'
    }
  }

  debounceLPHeight = () => {
    debounce(this.setHeightLP(), 100)
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  componentDidMount() {
    this.setHeightLP()

    window.addEventListener('resize', this.debounceLPHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceLPHeight)
  }

  render() {
    const backgroundImage = {
      backgroundImage:
        'url(' + this.props.backgroundImage.fields.file.url + ')',
      backgroundAttachment: 'fixed',
    }

    return (
      <div className='Live'>
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

          <div className='Live__container self-center w100 flex flex-col items-center justify-center mt4'>
            {this.props.shows.map((show, key) => {
              console.log(show)
              return (
                <div key={key} className='Live__show col-9'>
                  <Show
                    date={show.fields.date}
                    city={show.fields.city}
                    venue={show.fields.venue}
                    ticketLink={show.fields.ticketLink}
                  ></Show>
                </div>
              )
            })}
          </div>

          <div
            className={cx(
              'HomePage__arrow-container-container flex h100 absolute',
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
                'HomePage__arrow-container self-center pointer',
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
            className={cx(
              'HomePage__nav-container h100',
              { 'HomePage__nav-container--show': this.state.navOpen === true },
              { 'HomePage__nav-container--hide': this.state.navOpen === false }
            )}
          >
            <Nav></Nav>
          </div>
        </div>
      </div>
    )
  }
}
