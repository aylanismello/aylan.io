import React from 'react';
import PropTypes from 'prop-types';
import Work from './Work';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <Work close={close} imgSrc={pic02} article={this.props.article} articleTimeout={this.props.articleTimeout} />

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h1 className="major">Music</h1>
          <h3 className="major">Production</h3>
          <p>
            My main music project at the moment is Hooded Youth, which
            encompasses everything from Bossa Nova to bootleg remixes. Take
            a listen.
          </p>

          <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:70l5b03g3BNkElMbTgTF2v&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style={{ border: 'none', overflow: 'hidden' }} allowtransparency="true" />

          <h3 className="major">Mixes</h3>
          <p>
            I also release weekly mixes under the brand <a href="http://www.burncartel.com">
              Burn Cartel
            </a>.
          </p>
          <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/293074963&color=%23444444&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true" />
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p> */}
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <p>I have many personas online, but this is the real me.</p>
          <p>
            → <a href="mailto:hello@aylan.io ">aylan.io</a>
          </p>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <ul className="icons">
            {/* <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li> */}
            <li>
              <a href="http://fb.com/aylanmello" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>*/}
            <li>
              <a href="http://github.com/aylanismello" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>;
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
