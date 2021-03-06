import React from 'react';
import PropTypes from 'prop-types';

const tabs = [
  'About', 'Work', 'Music', 'Contact'
];

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={'https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_500/v1561453037/aylan.io-profile.jpg'} />
      {/* <span className="icon fa-diamond" /> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Aylan Mello</h1>
        <p>Code, music, languages, travel.</p>
      </div>
    </div>
    <nav>
      <ul>
        {
          tabs.map(tab => (
            <li>
              <a
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle(tab.toLowerCase());
                }}
              >
                {tab}
          </a>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
