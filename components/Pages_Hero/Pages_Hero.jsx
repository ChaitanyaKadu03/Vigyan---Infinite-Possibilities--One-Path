import React from 'react';
import Image from 'next/image';
import '../Landing_Hero/Landing_Hero.css';
import './Pages_Hero.css';
import Pages_Hero_Data from '@components/Data/Pages_Hero_Data';
import play from '../../public/assets/play.svg';

const Pages_Hero = ({ id }) => {
  let data = Pages_Hero_Data[id];
  return (
    <div className="pages-hero blackish-gradient nav-space-top">
      <div className="pages-hero-p1">
        <h1
          className="h1-tag"
          dangerouslySetInnerHTML={{ __html: data.Heading }}
        ></h1>
        <h2 className="body-large-tag neutral-70">{data.Paragraph}</h2>
        <a href='https://www.youtube.com/watch?v=wd2gVNavLCo' className="demo-video" passHref>
          <Image src={play} alt="icon" className="play-icon" />
          <p className="body-medium-tag">Demo Video</p>
        </a>
      </div>
      <div className="pages-hero-p2">
        <Image src={data.poster} alt="poster" />
      </div>
    </div>
  );
};

export default Pages_Hero;
