import React from 'react';
import PropTypes from 'prop-types';

const tabs = [
  'Work', 'About', 'Contact'
];

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
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
