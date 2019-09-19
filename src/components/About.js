import React from 'react';
import Icon from './Icon';

const cloudinaryImg = imageName =>
  `https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_1500/v1561453037/aylan.io-${imageName}.jpg`;

const SkillSection = ({ skills, skillType }) => (
  <div className="SkillSection" style={{ marginBottom: '2rem' }}>
    <h3 className="CodePiece-subheader">{skillType}:</h3>
    <div className="CodePiece-made-with-icons">
      {skills.map(icon => (
        <Icon iconType={icon} />
      ))}
    </div>
  </div>
);

const About = ({ article, articleTimeout, close, handleOpenArticle }) => (
  <article
    id="about"
    style={{ display: 'none' }}
    className={`${article === 'about' ? 'active' : ''} ${
      articleTimeout ? 'timeout' : ''
    }`}
  >
    <h1 className="major"> About </h1>
    <div
      className="AboutImage"
      style={{ backgroundImage: `url("${cloudinaryImg('launchpad')}")` }}
    >
      {/* <img className="image main" src={cloudinaryImg('launchpad')} alt="" /> */}
    </div>
    <p>
      <span style={{ fontSize: '26px', marginRight: '.2rem' }}>👋</span> Hi
      there! My name is Aylan Mello and I’m an American web developer and
      musician based out of Lisbon. I have a passion for developing full stack
      web applications with whatever technology fits the app. A full portfolio
      of my work can be found
      <a
        className="Code-major-link"
        href="javascript:;"
        onClick={() => handleOpenArticle('work')}
      >
        here
      </a>
      . Or you could jump straight to my{' '}
      <a
        className="Code-major-link"
        target="_blank"
        href="https://drive.google.com/file/d/1zhzb9OaguxLKn35JWrNZZGb5ELF-nFiG/view?usp=sharing"
      >
        resume
      </a>{' '}
      or{' '}
      <a
        target="_blank"
        className="Code-major-link"
        href="https://www.linkedin.com/in/aylanmello"
      >
        LinkedIn
      </a>{' '}
      .
    </p>

    <h2 className="major">My Skills:</h2>

    <SkillSection
      skills={['js', 'ruby', 'html', 'css', 'python']}
      skillType="languages"
    />
    <SkillSection
      skills={[
        'react-js',
        'ruby',
        'rails',
        'express',
        'gatsby',
        'wordpress',
        'redux'
      ]}
      skillType="frameworks"
    />
    <SkillSection
      skills={['aws', 'redis', 'git', 'postgresql']}
      skillType="technologies"
    />

    <SkillSection skills={['vscode', 'xd']} skillType="technologies" />

    {close}
  </article>
);

export default About;
