import cx from 'classnames'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Article from '../../components/Article'
import Button from '../../components/Button'
import ArrowIcon from '../../components/icons/Arrow'
import Hamburger from '../../components/icons/Hamburger'
import Nav from '../../components/Nav'
import SecondaryButton from '../../components/SecondaryButton'
import SocialModule from '../../components/SocialModule'
import { debounce } from '../../utils/debounce'
import './HomePage.scss'

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false,
    }
  }

  setHeightHP = () => {
    const homePage = document.querySelector('.HomePage')

    const pressContainer = document.querySelector('.Press__container')

    const navContainer = document.querySelector('.HomePage__nav-container')

    const arrowContainer = document.querySelector(
      '.HomePage__arrow-container-container'
    )

    const frames = document.querySelectorAll('iframe')

    if (window.innerWidth > 1100) {
      for (let frame of frames) {
        frame.style.height = pressContainer.offsetHeight - 16 + 'px'
      }
      navContainer.style.height = '100vh'
      arrowContainer.style.height = '100vh'
    } else {
      for (let frame of frames) {
        frame.style.height = '350px'
      }
      homePage.style.height = 'auto'
      navContainer.style.height = '100vh'
      arrowContainer.style.height = '100vh'
    }
  }
  debounceHPHeight = () => {
    debounce(this.setHeightHP(), 100)
  }
  componentDidMount() {
    this.setHeightHP()
    window.addEventListener('resize', this.debounceHPHeight)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceHPHeight)
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    const backgroundImage = {
      backgroundImage:
        'url(' + this.props.backgroundImage.fields.file.url + ')',
    }

    return (
      <div className='HomePage flex w100 '>
        <div
          onClick={this.toggleNav}
          className={cx('HomePage__nav-overlay p0 m0', {
            'HomePage__nav-overlay--active': this.state.navOpen,
          })}
        ></div>

        <div
          style={backgroundImage}
          className={cx('h100 bg-cover overflow-hidden p2 relative w100')}
        >
          <h1
            className={cx(
              'HomePage__headline HomePage__band-name text-center color-white'
            )}
          >
            <Link to='/'> The Breathing Effect</Link>
          </h1>

          <div className='flex items-center justify-center my2'>
            {/* <iframe style="border: 0; width: 350px; height: 470px;" src="" seamless><a href="https://thebreathingeffect.bandcamp.com/album/solarpunk-playlist">Solarpunk Playlist by The Breathing Effect</a></iframe> */}
            <iframe
              className='HomePage__bandcamp-iframe'
              src='https://bandcamp.com/EmbeddedPlayer/album=1842671387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
              seamless
              title='Solarpunk Playlist by The Breathing Effect'
            >
              <a href='https://thebreathingeffect.bandcamp.com/album/solarpunk-playlist'>
                Solarpunk Playlist by The Breathing Effect
              </a>
            </iframe>
          </div>

          <div className='HomePage__container flex mt2'>
            <div className='HomePage__container--left col-10 md:col-6 mr_5'>
              <Button
                href='https://open.spotify.com/artist/4sfL701NAogwKc7mBMWNsy?si=Rwd_dsDfS2qIFz5S08fWPQ'
                cta='listen on spotify'
              ></Button>

              <div className='Homepage__container-iframe col-12 mt1'>
                <iframe
                  className='col-12'
                  title="The Breathing Effect 'In The Morning' (Official Video)"
                  src='https://www.youtube.com/embed/yrYLPsyLMHY'
                  frameBorder='0'
                  allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen='allowfullscreen'
                  mozallowfullscreen='mozallowfullscreen'
                  msallowfullscreen='msallowfullscreen'
                  oallowfullscreen='oallowfullscreen'
                  webkitallowfullscreen='webkitallowfullscreen'
                ></iframe>
              </div>

              <div className='Homepage__container-iframe col-12 mt1'>
                <iframe
                  className='col-12'
                  title="The Breathing Effect: 'SHAPES THAT CHANGE SHAPE'"
                  src='https://www.youtube.com/embed/KAQr0SPUqQ8'
                  frameBorder='0'
                  allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen='allowfullscreen'
                  mozallowfullscreen='mozallowfullscreen'
                  msallowfullscreen='msallowfullscreen'
                  oallowfullscreen='oallowfullscreen'
                  webkitallowfullscreen='webkitallowfullscreen'
                ></iframe>
              </div>
            </div>

            <div className='HomePage__container--right col-10 mt1 cs:mt0 md:col-6 ml_5'>
              <Button
                href='https://music.apple.com/us/artist/the-breathing-effect/789870184'
                cta='listen on apple music'
              ></Button>

              <div className='Press__container self-center w100 flex flex-col items-center justify-center'>
                {this.props.articles.map((article, key) => {
                  if (key < 3) {
                    return (
                      <div key={key} className='mt1 col-12'>
                        <Article
                          author={article.fields.author}
                          date={article.fields.date}
                          link={article.fields.link}
                          outlet={article.fields.outlet}
                          title={article.fields.title}
                        ></Article>
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
              </div>

              <div className='Homepage__container-iframe col-12 mt1'>
                <iframe
                  className='col-12'
                  title='Ocean Cycle (Live in a Liquid House)'
                  src='https://www.youtube.com/embed/jnX6CNER8Ig'
                  frameBorder='0'
                  allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen='allowfullscreen'
                  mozallowfullscreen='mozallowfullscreen'
                  msallowfullscreen='msallowfullscreen'
                  oallowfullscreen='oallowfullscreen'
                  webkitallowfullscreen='webkitallowfullscreen'
                ></iframe>
              </div>
            </div>
          </div>

          <div className='mt2'>
            <SecondaryButton
              href='https://thebreathingeffect.bandcamp.com/merch'
              cta='merch'
            ></SecondaryButton>
          </div>

          <div className='HomePage__band-image mt2 flex justify-center items-center'>
            <img
              src='/breathing-effect.jpg'
              alt='Harry and Eli of The Breathing Effect.'
              className='col-11'
            />
          </div>

          <div className={cx('HomePage__desktop-socials-container')}>
            <SocialModule></SocialModule>
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
