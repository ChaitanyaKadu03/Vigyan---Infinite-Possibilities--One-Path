'use client';
import React, { useState, useInterval, useEffect } from 'react';
import './Landing_Hero.css';
import Image from 'next/image';
import hero_img from '../../public/assets/Home hero.svg';
import play from '../../public/assets/play.svg';
import orange from '../../public/assets/Svg shape/orange.svg';

const Landing_Hero = () => {
  const stats_data = [
    {
      id: 1,
      type: 'Students',
      count: 896,
      suffix: ' +'
    },
    {
      id: 2,
      type: 'Course',
      count: 3,
      suffix: ''
    },
    {
      id: 3,
      type: 'Views',
      count: '5k',
      suffix: ' +'
    }
  ];

  return (
    <div className="landing-hero nav-space-top">
      <div className="l-h-p1">
        <h1 className="h1-tag">
          Infinite <span className="grey-gradient-font">Possibilities</span>{' '}
          <span className="orange-gradient-font">One</span> Path{' '}
        </h1>
        <h2 className="body-large-tag">
          Master Physics with Expert-led Courses for JEE, NEET, and Beyond
        </h2>
        <a href='https://www.youtube.com/watch?v=wd2gVNavLCo' className="demo-video" passHref>
          <Image src={play} alt="icon" className="play-icon" />
          <p className="body-medium-tag">Demo Video</p>
        </a>
        <span className="line-br" />
        <div className="stats">
          {stats_data.map((data) => {
            return (
              <div key={data.id}>
                <p className="h4-tag">
                  {data.count} {data.suffix}
                </p>
                <p className="body-large-tag">{data.type}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="l-h-p2">
        <Image src={hero_img} alt="Sandeep Roy" priority />
      </div>
    </div>
  );
};

export default Landing_Hero;
