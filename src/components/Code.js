import React from 'react';
import Icon from './Icon';
import down from '../images/svgs/arrow_down.svg';
import up from '../images/svgs/arrow_up.svg';
import AnimateHeight from 'react-animate-height';

const cloudinaryImg = imageName =>
  `https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_1500/v1561453037/aylan.io-${imageName}.jpg`;

const codePieces = [
  {
    title: 'Burn Cartel',
    subtitle: 'Weekly music discovery web app',
    img: cloudinaryImg('bc'),
    href: 'http://www.burncartel.com',
    github: 'https://github.com/aylanismello/bc-web-client',
    more:
      "The home for my music lifestyle brand Burn Cartel: it's the place to discover our latest episodes and learn about great new music from around the world.",
    techDetails: `
          Burn Cartel is the combination of a few different systems running
          side by side. At its core is a Sidekiq scraping job on a Rails app, 
          which everyday scrapes the hottest new releases on Soundcloud.

          The client is a fully responsive ReactJS SPA served on Netlify. 
          The API, to be  snappy and simple is implemented in ExpressJS. 
          The database layer is 100% PostgreSQL.
          `,
    tech: [
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
    ]
  },
  {
    title: 'Min Bark',
    subtitle: 'Gatsby Website for German based multimedia artist',
    img: cloudinaryImg('min-bark'),
    href: 'http://min-bark.com',
    github: 'https://github.com/aylanismello/min-bark',
    more:
      'An example of porting an older, slow website running on Wordpress to a modern, React based Static Site Generator',
    techDetails: `
      The client's main objective was perfromance gains - so moving off of Wordpress was imperative. I still wanted to allow her to update
      content on her site using the familar Wordpress UI, so a build hook was attached to Wordpress to trigger a rebuild of my new site,
      coded in the React based Static Site Geneator known as Gatsby.
      
      Underneath the hood of the Wordpress CMS lies a standard REST API - when Gatsby is rebuilt and deployed it simply calls here for new data.
      
    `,
    tech: ['wordpress', 'gatsby', 'netlify']
  },
  {
    title: 'MashupBot',
    subtitle: 'Musical Tool for making mashups in the Browser',
    img: cloudinaryImg('mashupbot'),
    href: 'http://mashupbot.netlify.com',
    github: 'https://github.com/aylanismello/mashupbot',
    more:
      'Testing the boundaries of web audio technology by making a playful music app for on the fly creation.',
    tech: ['react-js', 'redux'],
    techDetails: `
      Using ReactJS for the UI and Redux to manage local state, one challenge for this web experience was timing.
      In order for two songs to synchronize in a music way, timing has to be more prescise that your average 
      setTimeout() function. That is where the wonderful Web Audio API came in handy, as well as a handy package
      called WebAudioScheduler which ensured  1/10^9​ ​ second timing precision for playing sound events.
    `
  },
  {
    title: 'Bossafy',
    subtitle: 'Tool for jazz music composition',
    img: cloudinaryImg('bossafy'),
    href: 'http://bossafy.herokuapp.com/',
    github: 'https://github.com/aylanismello/bossafy',
    tech: ['python', 'bottle', 'scrapy', 'react-js', 'semantic-ui'],
    more: `Helping composers escape writer's block by offering harmonic suggestions`,
    techDetails: `
      A chord corpus of various Bossa Nova compositions first had to be scraped from a variety of online sources.
      Then, I coded a simple 2-Markov Chain in Python whose end result accepted one chord as an input and output
      the most probable next chord according the the chain. This function was essentially the single endpoint on 
      the simple Bottle server that generates new chords. The frontend was coded in ReactJS and quickly prototyped
      using Semantic UI.
    `
  }
];
  
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
    return <div className="CodePiece">
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
              <div className="CodePiece-text-description">
                {techDetails}
              </div>
            </div>
            <div className="CodePiece-made-with">
              <h3 className="CodePiece-subheader">made with:</h3>
              <div className="CodePiece-made-with-icons">
                {tech.map(icon => <Icon iconType={icon} />)}
              </div>
            </div>
          </div>
        </AnimateHeight>

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
      <a
        target="_blank"
        className="Code-major-link"
        href="https://www.linkedin.com/in/aylanmello"
      >
        LinkedIn
      </a>{' '}
      or{' '}
      <a
        className="Code-major-link"
        target="_blank"
        href="https://drive.google.com/file/d/1zhzb9OaguxLKn35JWrNZZGb5ELF-nFiG/view?usp=sharing"
      >
        resume
      </a>
      .
    </p>

    <div className="CodePieces">
      {codePieces.map(codePiece => {
        return <CodePiece {...codePiece} />;
      })}
    </div>

    {close}
  </article>
);

export default Code;
