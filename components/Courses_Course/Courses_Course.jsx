import React from 'react';
import Course_Card_T2 from '@components/Course_Card_T2/Course_Card_T2';
import './Courses_Course.css';
import Image from 'next/image';
import selected from '../../public/assets/selected.svg';
import select from '../../public/assets/select.svg';
import arrow from '../../public/assets/arrow.svg';
import course from '../../public/assets/course.svg';

const Courses_Course = () => {
  let course_card_list = [{ id: 0 }, { id: 1 }, { id: 2 }];
  return (
    <div className="courses-course standard-padding">
      <div className="courses-course-p1">
        <div className="ccp1-p1">
          <Image src={course} alt="icon" />
          <h3 className="h3-tag neutral-100">Courses</h3>
        </div>
        <div className="ccp1-p2">
          <div>
            <Image src={selected} alt="icon" />
            <p className="body-medium-tag neutral-70">All Courses</p>
          </div>
          <div>
            <Image src={select} alt="icon" />
            <p className="body-medium-tag neutral-70">Free</p>
          </div>
          <div>
            <Image src={select} alt="icon" />
            <p className="body-medium-tag neutral-70">Paid</p>
          </div>
        </div>
      </div>
      <div className="courses-course-p2">
        <div className="ccp2-p1">
          <h3 className="h3-tag neutral-100">All Courses</h3>
          <div>
            <p className="body-medium-tag neutral-70">Sort by : </p>
            <p className="body-medium-tag neutral-80">
              New <Image src={arrow} alt="icon" />
            </p>
          </div>
        </div>
        <div className="ccp2-p2">
          {course_card_list.map((num) => (
            <Course_Card_T2 id={num.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses_Course;
