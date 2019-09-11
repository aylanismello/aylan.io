import React from 'react';
// import sketch from '../images/svgs/sketch.svg';
// import figma from '../images/svg/figma.svg';
// import css from '../images/svg/css.svg';
// import contenful from '../images/svg/contentful.svg';
// import netlify from '../images/svg/netlify.svg';
// import heroku from '../images/svg/heroku.svg';
// import webpack from '../images/svg/webpack.svg';
// import vscode from '../images/svg/vscode.svg';
// import ruby from '../images/svg/ruby.svg';
// import express from '../images/svg/express.svg';
// import flask from '../images/svg/flask.svg';
// import bottle from '../images/svg/bottle.svg';
// import sinatra from '../images/svg/sinatra.svg';
// import gatsby from '../images/svg/gatsby.svg';
// import sidekiq from '../images/svg/sidekiq.svg';
// import scrapy from '../images/svg/scrapy.svg';
// import aws from '../images/svg/aws.svg';
// import mongodb from '../images/svg/mongodb.svg';
// import js from '../images/svg/js.svg';
// import firebase from '../images/svg/firebase.svg';
// import reactnative from '../images/svg/reactnative.svg';
// import docker from '../images/svg/docker.svg';
// import graphql from '../images/svg/graphql.svg';
// import rails  from '../images/svg/rails.svg';
// import mysql from '../images/svg/mysql.svg';
// import nodejs from '../images/svg/nodejs.svg';
// import slack from '../images/svg/slack.svg';
// import npm from '../images/svg/npm.svg';
// import webpack from '../images/svg/webpack.svg';
// import jquery from '../images/svg/jquery.svg';
// import python from '../images/svg/python.svg';
// import reactjs from '../images/svg/reactjs.svg';
// import sass from '../images/svg/sass.svg';
// import redis from '../images/svg/redis.svg';
// import postgresql from '../images/svg/postgresql.svg';
// import html from '../images/svg/html.svg';

// const SVGS = {
//   sketch: sketch
// };

const centerFlex = {
  display: 'flex',
  justifyContent: 'center'
};

// const w = 60;

const cloudinarySvg = imageName =>
  `https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70/v1568138570/icons/${imageName}.svg`;

const Icon = ({ iconType, width, customText }) => (
  <div
    className="Icon-container"
    style={{ width: `${width}px`, height: `auto` }}
  >
    <div className="Icon" style={{ ...centerFlex, paddingBottom: '0.2em' }}>
      <img
        className="Icon-svg image"
        src={cloudinarySvg(iconType)}
        alt={iconType}
        style={{
          width: width,
          height: width
          // height: '100%',
          // maxHeight: w
        }}
      />
    </div>
    <div className="Icon-title" style={centerFlex}>
      <span
        className="Icon-title-content"
        style={{ fontSize: '0.8em', textAlign: 'center', color: 'whitesmoke' }}
      >
        {customText ? customText : iconType}
      </span>
    </div>
  </div>
);

Icon.defaultProps = {
  width: 60
};


export default Icon;
