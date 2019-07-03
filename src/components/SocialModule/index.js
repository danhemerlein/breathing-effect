import React, { Component } from "react";
import cx from 'classnames';

import './SocialModule.scss'

export default class SocialModule extends Component {

  render() {

    return (
      <div className="SocialModule">
        <div>
          <ul className={cx("SocialModule__nav")}>

            <li className={cx("SocialModule__nav--list-item mb1 relative flex justify-center")}>
              <a href="https://www.instagram.com/thebreathingeffect/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram color-white"></i></a>
            </li>

            <li className={cx("SocialModule__nav--list-item mb1 relative flex justify-center")}>
              <a href="https://www.facebook.com/thebreathingeffect/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook color-white"></i></a>
            </li>

            <li className={cx("SocialModule__nav--list-item mb1 relative flex justify-center")}>
              <a href="https://thebreathingeffect.bandcamp.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-bandcamp color-white"></i></a>
            </li>

            <li className={cx("SocialModule__nav--list-item mb1 relative flex justify-center")}>
              <a href="https://soundcloud.com/the-breathing-effect" target="_blank" rel="noopener noreferrer"><i className="fab fa-soundcloud color-white"></i></a>
            </li>

            <li className={cx("SocialModule__nav--list-item mb1 relative flex justify-center")}>
              <a href="https://music.apple.com/us/artist/the-breathing-effect/789870184"><i className="fab fa-apple color-white"></i></a>
            </li>

            <li className={cx("SocialModule__nav--list-item relative flex justify-center")}>
              <a href="https://open.spotify.com/artist/4sfL701NAogwKc7mBMWNsy" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify color-white"></i></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
