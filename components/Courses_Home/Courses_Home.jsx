'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Courses_Home.css';
import Image from 'next/image';
import arrow from '../../public/assets/arrow.svg';
import coming_soon from '../../public/assets/coming-soon.svg';
import Course_Card_T1 from '@components/Course_Card_T1/Course_Card_T1';
import Link from 'next/link';

const Courses_Home = () => {
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
  let course_card_list = [{ id: 0 }, { id: 1 }, { id: 2 }];
  return (
    <div className="courses-home" ref={sectionRef}>
      <div className="courses-home-p1">
        <h3 className="h3-tag neutral-100">Courses We Offer</h3>
        <div className="cht-p1">
          <p className="body-medium-tag neutral-70">
            Comprehensive Physics Courses Tailored for JEE, NEET, and Beyond
          </p>
          <div>
            <Link href={'/courses'} className="body-medium-tag button-33">
              Know More
            </Link>
          </div>
        </div>
      </div>
      <div className="courses-home-p2">
        {course_card_list.map((num) => (
          <Course_Card_T1 id={num.id} key={num.id}/>
        ))}
        <div>
          <Image src={coming_soon} alt="Image" className="chp2-coming-home" />
          {/* <span className="chp2-div-span" /> */}
        </div>
      </div>
    </div>
  );
};

export default Courses_Home;
