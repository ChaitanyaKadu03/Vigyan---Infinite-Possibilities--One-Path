import React from 'react';
import './Course_Card_T1.css';
import Image from 'next/image';
import star from '../../public/assets/star.svg';
import banner from '../../public/assets/course_1.jpg';
import teach_img from '../../public/assets/teacher 2.jpg';
import clock from '../../public/assets/clock.svg';
import level from '../../public/assets/level.svg';

const Course_Card_T1 = ({ num }) => {
  return (
    // <div className="course-card-t1">
    //   <Image src={data.banner} alt="Course " priority />
    //   <div className="course-card-t1-bottom">
    //     <div className="cct1b-p1">
    //       <p>{data.subject}</p>
    //       <p>{data.cost}</p>
    //     </div>
    //     <h5>{data.heading}</h5>
    //     <div className="cct1b-p2">
    //       <Image src={star} alt="star icon" />
    //       <p>{data.rating}</p>
    //       <p>{data.reviews}</p>
    //       <span className="cct1b-p2-line" />
    //       <p>{data.no_students}</p>
    //       <p>students</p>
    //     </div>
    //     <div className="cct1b-p3">
    //       <Image src={data.teach_img} alt="Sandeep Roy" />
    //       <p>{data.teacher}</p>
    //       <p>teacher</p>
    //     </div>
    //     <span className="cct1b-line" />
    //     <div className="cct1b-p4">
    //       <Image src={clock} alt="clock icon" />
    //       <p>{data.hours} hours</p>
    //       <Image src={level} alt="level icon" />
    //       <p>{data.level}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="course-card-t1">
      <Image src={banner} alt="Course " className="cct1-banner" priority />
      <div className="course-card-t1-bottom">
        <div className="cct1b-p1">
          <p className="body-small-tag">Physics</p>
          <p className="h5-tag">Free</p>
        </div>
        <h5 className="h5-tag blackish">Basics of Physics</h5>
        <div className="cct1b-p2">
          <div>
            <Image src={star} alt="star icon" className="cct1b-p2-star" />
            <p className="body-large-tag">4.2</p>
            <p className="body-medium-tag neutral-70">(123+ reviews)</p>
          </div>
          <span className="cct1b-p2-line" />
          <div>
            <p className="body-large-tag">486+</p>
            <p className="body-medium-tag neutral-70">students</p>
          </div>
        </div>
        <div className="cct1b-p3">
          <Image src={teach_img} alt="Sandeep Roy" />
          <p className="h5-tag blackish">Sandeep Roy</p>
          <p className="body-medium-tag neutral-70">teacher</p>
        </div>
        <span className="cct1b-line" />
        <div className="cct1b-p4">
          <div>
            <Image src={clock} alt="clock icon" className="cct1b-p4-clock" />
            <p className="body-medium-tag neutral-70">86 hours</p>
          </div>
          <div>
            <Image src={level} alt="level icon" className="cct1b-p4-level" />
            <p className="body-medium-tag neutral-70">Beginners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course_Card_T1;
