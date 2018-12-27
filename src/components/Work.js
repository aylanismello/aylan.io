import React from 'react';
import bc from '../images/burn_cartel_portfolio_1.png';
import bossafy from '../images/bossafy_portfolio_1.png';

const WorkPiece = ({ title, description, img, href }) => (
  <div className="WorkPiece">
    <div className="WorkPiece-headers">
      <a href={href} target="_blank">
        <h2 className="major">{title}</h2>
      </a>
      <h3>{description}</h3>
    </div>
    <span className="image main">
      <a href={href} target="_blank">
        <img src={img} alt="" />
      </a>
    </span>
  </div>
);

const Work = ({ article, articleTimeout, imgSrc, close }) => (
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
        href="https://drive.google.com/file/d/1SJTfXlhf2IZOuuf5xK5A3-TZEZodvJ6m/view?usp=sharing"
      >
        resume
      </a>
      .
    </p>

    <WorkPiece
      title="Burn Cartel"
      description="Weekly music discovery web app"
      img={bc}
      href="http://www.burncartel.com"
    />
    <WorkPiece
      title="Bossafy"
      description="Tool for jazz music composition"
      img={bossafy}
      href="http://bossafy.herokuapp.com/"
    />
    {/* <h2 className="major">Burn Cartel</h2>
    <h3>Weekly music discovery web app</h3>
    <span className="image main">
      <img src={bc} alt="" />
    </span> */}

    {close}
  </article>
);

export default Work;
