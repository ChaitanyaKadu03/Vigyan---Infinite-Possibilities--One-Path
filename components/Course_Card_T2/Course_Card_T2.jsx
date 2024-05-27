import React from 'react';
import Image from 'next/image';
import './Course_Card_T2.css';
import img from '../../public/assets/course_1.jpg';
import star from '../../public/assets/star.svg';
import audience from '../../public/assets/audience.svg';
import level from '../../public/assets/level.svg';
import Course_Card_Data from '@components/Data/Course_Card_Data';

const Course_Card_T2 = ({ id }) => {
  const data = Course_Card_Data[id];
  return (
    <div className="course-card-t2">
      <Image
        src={data.poster}
        alt="course poster"
        className="cct2-poster"
      />
      <div className="cct2-p2">
        <h5 className="h5-tag neutral-100">{data.heading}</h5>
        <div className="cct2p2-p1">
          <div>
            <Image src={audience} alt="icon" />
            <p className="body-small-tag neutral-60">{data.student}</p>
          </div>
          <div>
            <Image src={star} alt="icon" />
            <p className="body-small-tag neutral-60">{data.rating}</p>
          </div>
          <div>
            <Image src={level} alt="icon" />
            <p className="body-small-tag neutral-60">{data.level}</p>
          </div>
        </div>
        <p className="body-small-tag neutral-70">{data.paragraph}</p>
        <p className="body-medium-tag cct2p3">{data.cost}</p>
      </div>
    </div>
  );
};

export default Course_Card_T2;
