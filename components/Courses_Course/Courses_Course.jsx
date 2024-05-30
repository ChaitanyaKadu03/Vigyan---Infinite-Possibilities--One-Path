'use client';
import React, { useState, useEffect, useRef } from 'react';
import Course_Card_T2 from '@components/Course_Card_T2/Course_Card_T2';
import './Courses_Course.css';
import Image from 'next/image';
import selected from '../../public/assets/selected.svg';
import select from '../../public/assets/select.svg';
import arrow from '../../public/assets/arrow.svg';
import course from '../../public/assets/course.svg';
import soon from '../../public/assets/coming-soon.svg';

const Courses_Course = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  let [courseType, setCoursetype] = useState(1);
  let course_card_list = [{ id: 0 }, { id: 1 }, { id: 2 }];
  return (
    <div className="courses-course standard-padding" ref={sectionRef}>
      <div className="courses-course-p1">
        <div className="ccp1-p1">
          <Image src={course} alt="icon" />
          <h3 className="h3-tag neutral-100">Courses</h3>
        </div>
        <div className="ccp1-p2">
          <div
            onClick={() => {
              setCoursetype(1);
            }}
          >
            <Image src={courseType == 1 ? selected : select} alt="icon" />
            <p className="body-medium-tag neutral-70">All Courses</p>
          </div>
          <div
            onClick={() => {
              setCoursetype(2);
            }}
          >
            <Image src={courseType == 2 ? selected : select} alt="icon" />
            <p className="body-medium-tag neutral-70">Free</p>
          </div>
          <div
            onClick={() => {
              setCoursetype(3);
            }}
          >
            <Image src={courseType == 3 ? selected : select} alt="icon" />
            <p className="body-medium-tag neutral-70">Paid</p>
          </div>
        </div>
      </div>
      <div className="courses-course-p2">
        <div className="ccp2-p1">
          <h3 className="h3-tag neutral-100">All Courses</h3>
          <div>
            <p className="body-medium-tag neutral-70">Sort by : </p>
            <select className="body-medium-tag neutral-80">
              <option value="New">New</option>
              <option value="Popular">Popular</option>
            </select>
          </div>
        </div>
        <div className="ccp2-p2">
          {course_card_list.map((num) => (
            <Course_Card_T2 id={num.id} type={courseType} />
          ))}
          {courseType == 3 ? <Image src={soon} alt="Image" className='coming-soon-img-cc'/> : ''}
        </div>
      </div>
    </div>
  );
};

export default Courses_Course;
