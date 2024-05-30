import React from 'react';
import Image from 'next/image';
import img from '../../public/assets/Course hero.svg';
import '../Landing_Hero/Landing_Hero.css';
import '../Pages_Hero/Pages_Hero.css';
import './Course_Hero.css';
import clock from '../../public/assets/clock.svg';
import lesson from '../../public/assets/lesson.svg';
import level from '../../public/assets/level.svg';
import star from '../../public/assets/star.svg';
import Course_Card_Data from '../Data/Course_Card_Data';
import play from '../../public/assets/play.svg';

const Course_Hero = ({ id }) => {
  const data = Course_Card_Data[id];
  return (
    <div className="course-hero pages-hero blackish-gradient nav-space-top">
      <div className="course-hero-p1 pages-hero-p1">
        <h1 className="h1-tag grey-gradient-font">{data.heading}</h1>
        <h2 className="body-large-tag neutral-70">{data.paragraph}</h2>
        <div className="ph-p1-p1">
          <Image src={star} alt="icon" />
          <div>
            <p className="body-large-tag">{data.rating}</p>
            <p className="body-medium-tag neutral-70">{data.reviews}</p>
          </div>
          <span />
          <div>
            <p className="body-large-tag">{data.student}</p>
            <p className="body-medium-tag neutral-70">students</p>
          </div>
        </div>
        <a href={data.demo_video} target='_blank' className="demo-video" passHref>
          <Image src={play} alt="icon" className="play-icon" />
          <p className="body-medium-tag">Demo Video</p>
        </a>
        <span className="ph-p1-span" />
        <div className="ph-p1-p2">
          <div>
            <Image src={clock} alt="icon" />
            <p className="body-medium-tag neutral-70">{data.content}</p>
          </div>
          <div>
            <Image src={lesson} alt="icon" />
            <p className="body-medium-tag neutral-70">{data.lessons}</p>
          </div>
          <div>
            <Image src={level} alt="icon" />
            <p className="body-medium-tag neutral-70">{data.level}</p>
          </div>
        </div>
      </div>
      <div className="pages-hero-p2 course-hero-p2">
        <Image src={img} alt="poster" />
      </div>
    </div>
  );
};

export default Course_Hero;
