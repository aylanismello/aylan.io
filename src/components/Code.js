import React from 'react';
import Icon from './Icon';
import down from '../images/svgs/arrow_down.svg';
import up from '../images/svgs/arrow_up.svg';

const cloudinaryImg = imageName =>
  `https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_1500/v1561453037/aylan.io-${imageName}.jpg`;

class CodePiece extends React.Component {
  state = {
    showMore: false
  };
  
  render() {
    const {
      title,
      description,
      img,
      href,
      more,
      tech = [],
      github
    } = this.props;

    const { showMore } = this.state;
    return <div className="CodePiece">
        <div className="CodePiece-headers">
          <div className="CodePiece-title">
            <a href={href} target="_blank">
              <h2 className="major">{title}</h2>
            </a>

            <a href={github} className="CodePiece-github" target="_blank">
              <Icon iconType="github-white" customText="source" width={30} />
            </a>
          </div>
          <h3>[{description}]</h3>
          {/* <div>{more}</div> */}
        </div>
        <span className="image main">
          <a href={href} target="_blank">
            <img src={img} alt="" />
          </a>
        </span>

        {showMore && <div className="CodePiece-more-info">
            <div className="CodePiece-made-with">
              <h3 className="CodePiece-subheader">made with:</h3>
              <div className="CodePiece-made-with-icons">
                {tech.map(icon => <Icon iconType={icon} />)}
              </div>
            </div>
          </div>}
        <div className="CodePiece-learn-more" onClick={() => this.setState({
              showMore: !this.state.showMore
            })}>
          <img src={showMore ? up : down} />
          <span className="CodePiece-learn-more-text">
            {showMore ? 'less' : 'learn more'}
          </span>
        </div>
      </div>;
  }
}

const Code = ({ article, articleTimeout, imgSrc, close }) => (
  <article
    id="code"
    className={`${article === 'code' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h1 className="major">Code</h1>
    <p>
      I have a passion for developing full stack web applications with whatever
      technology fits the app. Here's a short portfolio of my favorite work. You
      could also skip ahead to my{' '}
      <a target="_blank" href="https://www.linkedin.com/in/aylanmello">
        LinkedIn
      </a>{' '}
      or{' '}
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1zhzb9OaguxLKn35JWrNZZGb5ELF-nFiG/view?usp=sharing"
      >
        resume
      </a>
      .
    </p>

    <div className="CodePieces">
      <CodePiece
        title="Burn Cartel"
        description="Weekly music discovery web app"
        img={cloudinaryImg('bc')}
        href="http://www.burncartel.com"
        github="https://github.com/aylanismello/bc-web-client"
        more="The home for my music lifestyle brand Burn Cartel: it's the place to discover our latest episodes and learn about great new music from around the world."
        tech={[
          'react-js',
          'rails',
          'express',
          'nodejs',
          'sass',
          'postgresql',
          'webpack',
          'sidekiq',
          'heroku',
          'netlify'
        ]}
      />
      <CodePiece
        title="Min Bark"
        description="Gatsby Website for German based multimedia artist"
        img={cloudinaryImg('min-bark')}
        href="http://min-bark.com"
        github="https://github.com/aylanismello/min-bark"
        more="Website made for Min Bark - where the main objective was to move off of Wordpress to create a more perfomant, pleasant viewing experience."
        tech={['wordpress', 'gatsby', 'netlify']}
      />
      <CodePiece
        title="MashupBot"
        description="Musical Tool for making Mashups in the Browser"
        img={cloudinaryImg('mashupbot')}
        href="http://mashupbot.netlify.com"
        github="https://github.com/aylanismello/mashupbot"
        more="Testing the boundaries of web audio technology by making a playful music app for on the fly creation."
        tech={['react-js', 'redux']}
      />
      <CodePiece
        title="Bossafy"
        description="Tool for jazz music composition"
        img={cloudinaryImg('bossafy')}
        href="http://bossafy.herokuapp.com/"
        github="https://github.com/aylanismello/bossafy"
        tech={['python', 'bottle', 'scrapy']}
        more=""
      />

      {/* <h2 className="major">Burn Cartel</h2>
    <h3>Weekly music discovery web app</h3>
    <span className="image main">
      <img src={bc} alt="" />
    </span> */}
    </div>

    {close}
  </article>
);

export default Code;
