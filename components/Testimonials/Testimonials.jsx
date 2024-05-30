'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import Testimonial_Card from '@components/Testimonial_Card/Testimonial_Card';
import Testimonials_Data from '@components/Data/Testimonials_Data';
import Link from 'next/link';

const Testimonials = ({ id }) => {
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
  let [screenmob, setscreenmob] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 900 && id == 0) {
        setscreenmob(true);
      } else {
        setscreenmob(false);
      }
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <div className="testimonials standard-padding" ref={sectionRef}>
      <div className="testimonials-p1">
        <h3 className="h3-tag neutral-100">Testimonials</h3>
        <p className="body-medium-tag neutral-70">
          Discover How Vigyan Has Transformed the Academic Journeys of Aspiring
          Engineers and Doctors
        </p>
      </div>
      <div className="testimonials-p2">
        {Testimonials_Data.map((info) => (
          <Testimonial_Card key={info.id} data={info} ismob={screenmob} />
        ))}
      </div>
      {id == 1 ? (
        ''
      ) : (
        <Link href={'/testimonials'} className="body-medium-tag button-33">
          Read More
        </Link>
      )}
    </div>
  );
};

export default Testimonials;
