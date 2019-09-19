import React from 'react';
import Icon from './Icon';
import down from '../images/svgs/arrow_down.svg';
import up from '../images/svgs/arrow_up.svg';
import AnimateHeight from 'react-animate-height';
import { code } from '../data/work';

class CodePiece extends React.Component {
  state = {
    showMore: false
  };

  render() {
    const {
      title,
      subtitle,
      img,
      href,
      more,
      tech = [],
      github,
      techDetails
    } = this.props;

    const { showMore } = this.state;
    return (
      <div className="CodePiece">
        <div className="CodePiece-headers">
          <div className="CodePiece-title">
            <a href={href} target="_blank">
              <h2 className="major">{title}</h2>
            </a>
          </div>
          <h3>[{subtitle}]</h3>
          <div className="CodePiece-description">{more}</div>
          <div className="CodePiece-links">
            <a href={github} className="CodePiece-link" target="_blank">
              <Icon iconType="github-white" customText="github" width={30} />
            </a>
            <a href={href} className="CodePiece-link" target="_blank">
              <Icon iconType="laptop" customText="live" width={35} />
            </a>
          </div>
        </div>
        <span className="image main">
          <a href={href} target="_blank">
            <img src={img} alt="" />
          </a>
        </span>

        <AnimateHeight duration={500} height={showMore ? 'auto' : '0'}>
          <div className="CodePiece-more-info">
            <div className="CodePiece-tech-details">
              <h3 className="CodePiece-subheader">tech details:</h3>
              <div className="CodePiece-text-description">{techDetails}</div>
            </div>
            <div className="CodePiece-made-with">
              <h3 className="CodePiece-subheader">made with:</h3>
              <div className="CodePiece-made-with-icons">
                {tech.map(icon => (
                  <Icon iconType={icon} />
                ))}
              </div>
            </div>
          </div>
        </AnimateHeight>

        <div
          className="CodePiece-learn-more"
          onClick={() =>
            this.setState({
              showMore: !this.state.showMore
            })
          }
        >
          <img src={showMore ? up : down} />
          <span className="CodePiece-learn-more-text">
            {showMore ? 'less' : 'learn more'}
          </span>
        </div>
      </div>
    );
  }
}

const Code = ({
  article,
  articleTimeout,
  imgSrc,
  close,
  handleOpenArticle
}) => (
  <article
    id="work"
    className={`${article === 'work' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h1 className="major">Work</h1>
    <p>
      As a full stack developer, I pride myself on delivering results through
      all parts of the stack, from the design, to the front end, to the back
      end. Here’s some of my favorite work. If you haven’t already, make sure to
      <a
        className="Code-major-link"
        href="javascript:;"
        onClick={() => handleOpenArticle('about')}
      >
        {' '}
        learn a little bit more about me{' '}
      </a>{' '}
      before jumping in!
    </p>

    <div className="CodePieces">
      {code.map(codePiece => {
        return <CodePiece {...codePiece} />;
      })}
    </div>

    {close}
  </article>
);

export default Code;
