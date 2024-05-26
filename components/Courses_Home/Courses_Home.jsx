import React from 'react';
import './Courses_Home.css';
import Image from 'next/image';
import arrow from '../../public/assets/arrow.svg';
import coming_soon from '../../public/assets/coming-soon.svg';
import Course_Card_T1 from '@components/Course_Card_T1/Course_Card_T1';

const Courses_Home = () => {
  console.log(22);
  const course_cards_data = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="courses-home">
      <div className="courses-home-p1">
        <h3 className="h3-tag neutral-100">Courses We Offer</h3>
        <div className="cht-p1">
          <p className="body-medium-tag neutral-70">
            Comprehensive Physics Courses Tailored for JEE, NEET, and Beyond
          </p>
          <div>
            <Image src={arrow} alt="arrow icon" />
            <Image src={arrow} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className="courses-home-p2">
        <Course_Card_T1 num={1} />
        <Course_Card_T1 num={2} />
        <Course_Card_T1 num={3} />
        <Image src={coming_soon} alt="Image" className="chp2-coming-home" />
      </div>
    </div>
  );
};

export default Courses_Home;
