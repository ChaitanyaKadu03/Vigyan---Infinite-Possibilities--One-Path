import React from 'react';
import './Course_Card_T1.css';
import Image from 'next/image';
import star from '../../public/assets/star.svg';
import banner from '../../public/assets/course_1.jpg';
import clock from '../../public/assets/clock.svg';
import level from '../../public/assets/level.svg';
import Course_Card_Data from '@components/Data/Course_Card_Data';
import Link from 'next/link';

const Course_Card_T1 = ({ id }) => {
  const data = Course_Card_Data[id];
  return (
    <Link href={data.link} className="course-card-t1" key={data.id}>
      <Image src={data.poster} alt="Course " className="cct1-banner" priority />
      <div className="course-card-t1-bottom">
        <div className="cct1b-p1">
          <p className="body-small-tag">{data.subject}</p>
          <p className="h5-tag">{data.cost}</p>
        </div>
        <h5 className="h5-tag blackish">{data.heading}</h5>
        <div className="cct1b-p2">
          <div>
            <Image src={star} alt="star icon" className="cct1b-p2-star" />
            <p className="body-large-tag" style={{ color: '#000' }}>
              {data.rating}
            </p>
            <p className="body-medium-tag neutral-70">{data.reviews}</p>
          </div>
          <span className="cct1b-p2-line" />
          <div>
            <p className="body-large-tag" style={{ color: '#000' }}>
              {data.student}
            </p>
            <p className="body-medium-tag neutral-70">students</p>
          </div>
        </div>
        <div className="cct1b-p3">
          <Image src={data.teacher_img} alt="Sandeep Roy" />
          <p className="h5-tag blackish">{data.teacher_name}</p>
          <p className="body-medium-tag neutral-70">teacher</p>
        </div>
        <span className="cct1b-line" />
        <div className="cct1b-p4">
          <div>
            <Image src={clock} alt="clock icon" className="cct1b-p4-clock" />
            <p className="body-medium-tag neutral-70">{data.content}</p>
          </div>
          <div>
            <Image src={level} alt="level icon" className="cct1b-p4-level" />
            <p className="body-medium-tag neutral-70">{data.level}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card_T1;
